#!/usr/bin/env python3
"""
Quick-start script for Investors Clinic Flask Server.

Usage:
  python run.py              → Start dev server on port 5000
  python run.py --port 8080  → Custom port
  python run.py --prod       → Production mode (no debug)
"""

import sys
import os
import subprocess


def main():
    port = 5000
    debug = True

    # Parse simple CLI args
    args = sys.argv[1:]
    if "--port" in args:
        idx = args.index("--port")
        if idx + 1 < len(args):
            port = int(args[idx + 1])
    if "--prod" in args:
        debug = False

    # Check if dist/ exists
    dist_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")
    if not os.path.exists(dist_dir):
        print("⚠️  No 'dist/' folder found. Building the frontend first...")
        result = subprocess.run(["npm", "run", "build"], cwd=os.path.dirname(os.path.abspath(__file__)))
        if result.returncode != 0:
            print("❌ Build failed. Please run 'npm run build' manually.")
            sys.exit(1)
        print("✅ Frontend built successfully!\n")

    # Set env vars
    os.environ["PORT"] = str(port)
    os.environ["FLASK_DEBUG"] = "true" if debug else "false"

    # Import and run Flask app
    from app import app
    app.run(host="0.0.0.0", port=port, debug=debug)


if __name__ == "__main__":
    main()
