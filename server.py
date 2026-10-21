"""Optional local server for GCC Atlas prototype.

Runs the standalone UI and optionally connects the AI research copilot to OpenAI.
No key is bundled. Without OPENAI_API_KEY, the UI automatically uses its local demo logic.
"""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json, os, urllib.request, urllib.error

ROOT = os.path.dirname(os.path.abspath(__file__))
MODEL = os.environ.get("OPENAI_MODEL", "gpt-4.1-mini")
API_URL = os.environ.get("OPENAI_API_URL", "https://api.openai.com/v1/responses")

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_POST(self):
        if self.path != "/api/brief":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length", "0"))
        try:
            payload = json.loads(self.rfile.read(length) or b"{}")
        except json.JSONDecodeError:
            self.send_error(400, "Invalid JSON")
            return
        api_key = os.environ.get("OPENAI_API_KEY")
        if not api_key:
            self._json(503, {"mode": "demo", "error": "OPENAI_API_KEY is not configured"})
            return
        prompt = str(payload.get("prompt", ""))[:6000]
        context = {
            "signals": payload.get("signals", [])[:20],
            "cities": payload.get("cities", [])[:10],
            "sources": payload.get("sources", {}),
        }
        system = (
            "You are GCC Atlas, an evidence-first analyst of India's Global Capability Centre ecosystem. "
            "Use ONLY the supplied context. Do not invent facts, salaries, rental values, incentives, company headcounts, "
            "provider performance or source dates. Distinguish reported facts from inference and planned from completed activity. "
            "State important missing data. Cite claims with source titles and full URLs from the supplied source register. "
            "Keep the brief concise, structured, and decision-oriented. If context is insufficient, say so explicitly."
        )
        request_body = {
            "model": MODEL,
            "input": [
                {"role": "system", "content": [{"type": "input_text", "text": system}]},
                {"role": "user", "content": [{"type": "input_text", "text": "Context JSON:\n" + json.dumps(context, ensure_ascii=False) + "\n\nQuestion:\n" + prompt}]},
            ],
            "max_output_tokens": 1000,
        }
        req = urllib.request.Request(API_URL, data=json.dumps(request_body).encode(), headers={
            "Authorization": "Bearer " + api_key,
            "Content-Type": "application/json",
        }, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=45) as response:
                data = json.loads(response.read().decode())
            answer = data.get("output_text")
            if not answer:
                parts = []
                for item in data.get("output", []):
                    for content in item.get("content", []):
                        if content.get("type") == "output_text":
                            parts.append(content.get("text", ""))
                answer = "\n\n".join(parts)
            if not answer:
                raise ValueError("The model response contained no text output")
            self._json(200, {"mode": "live", "brief": answer})
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, ValueError) as exc:
            self._json(502, {"mode": "error", "error": str(exc)[:500]})

    def _json(self, status, value):
        body = json.dumps(value).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", "8000"))
    print(f"GCC Atlas running at http://localhost:{port}/gcc_atlas_prototype.html")
    ThreadingHTTPServer(("0.0.0.0", port), Handler).serve_forever()
