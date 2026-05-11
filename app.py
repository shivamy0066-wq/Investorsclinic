"""
Investors Clinic - Python Flask Backend
========================================
Serves the pre-built React SPA while providing Python-based API endpoints.
The frontend UI is completely unchanged — Flask acts as the web server.

Routes:
  - /api/*          → Python backend API endpoints
  - /assets/*       → Static assets (JS, CSS, images)
  - /* (catch-all)  → React SPA index.html (client-side routing)
"""

import os
import json
from datetime import datetime
from flask import Flask, send_from_directory, jsonify, request, abort

# ---------------------------------------------------------------------------
# App Configuration
# ---------------------------------------------------------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(BASE_DIR, "dist")

app = Flask(__name__, static_folder=DIST_DIR, static_url_path="")

# Load .env if available
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "investors-clinic-dev-key-2024")


# ---------------------------------------------------------------------------
# Data Layer (mirrors src/constants.ts — single source of truth in Python)
# ---------------------------------------------------------------------------

CITIES = [
    "Noida", "Gurugram", "Faridabad", "Greater Noida West",
    "Jaipur", "Pune", "Goa", "Bengaluru", "Dehradun"
]

PROPERTIES = [
    {
        "id": "signature-global-city",
        "tag": "Featured",
        "tagColor": "bg-secondary",
        "title": "Signature Global City",
        "loc": "Sector 37D, Noida",
        "city": "Noida",
        "price": "₹1.2 Cr Onwards",
        "bhk": "2 & 3 BHK",
        "sqft": "1450 sq.ft",
        "img": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
        "description": "Experience a unique lifestyle at Signature Global City, featuring low-rise premium floors with world-class amenities and lush green landscapes in the heart of Noida."
    },
    {
        "id": "godrej-south-estate",
        "tag": "Limited Offering",
        "tagColor": "bg-secondary",
        "title": "Godrej South Estate",
        "loc": "Okhla, Noida",
        "city": "Noida",
        "price": "₹4.5 Cr Onwards",
        "bhk": "3 & 4 BHK",
        "sqft": "2800 sq.ft",
        "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
        "description": "A landmark of luxury in South Noida, Godrej South Estate offers ultra-premium residences with advanced air purification systems and bespoke interiors."
    },
    {
        "id": "bptp-downtown-66",
        "tag": "Hot Property",
        "tagColor": "bg-secondary",
        "title": "BPTP Downtown 66",
        "loc": "Sector 66, Gurugram",
        "city": "Gurugram",
        "price": "₹3.5 Cr Onwards",
        "bhk": "3 & 4 BHK",
        "sqft": "2400 sq.ft",
        "img": "https://images.unsplash.com/photo-1460317442991-0ec239f636a7?q=80&w=800&auto=format&fit=crop",
        "description": "BPTP Downtown 66 stands as a testament to modern urban living, offering high-end apartments with smart home features."
    },
    {
        "id": "adani-the-marq",
        "tag": "Luxury Collection",
        "tagColor": "bg-[#bda55d]",
        "title": "Adani The Marq",
        "loc": "Sector 110, Noida",
        "city": "Noida",
        "price": "₹5.2 Cr Onwards",
        "bhk": "4 BHK",
        "sqft": "3100 sq.ft",
        "img": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
        "description": "The Marq by Adani is a pinnacle of architectural grandeur, offering expansive 4 BHK residences."
    },
]


# ---------------------------------------------------------------------------
# API Routes — Python-powered backend endpoints
# ---------------------------------------------------------------------------

@app.route("/api/health")
def api_health():
    """Health check endpoint."""
    return jsonify({
        "status": "ok",
        "service": "Investors Clinic API",
        "timestamp": datetime.now().isoformat(),
        "python": True
    })


@app.route("/api/properties")
def api_properties():
    """Return all properties, with optional city filter."""
    city = request.args.get("city")
    if city and city != "All Cities":
        filtered = [p for p in PROPERTIES if p["city"].lower() == city.lower()]
    else:
        filtered = PROPERTIES
    return jsonify({"properties": filtered, "total": len(filtered)})


@app.route("/api/properties/<property_id>")
def api_property_detail(property_id):
    """Return a single property by ID."""
    prop = next((p for p in PROPERTIES if p["id"] == property_id), None)
    if not prop:
        abort(404)
    return jsonify(prop)


@app.route("/api/cities")
def api_cities():
    """Return all available cities."""
    return jsonify({"cities": CITIES})


@app.route("/api/contact", methods=["POST"])
def api_contact():
    """Handle contact form submissions."""
    data = request.get_json(silent=True)
    if not data:
        return jsonify({"error": "No data provided"}), 400

    name = data.get("name", "").strip()
    phone = data.get("phone", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()

    if not name or not phone:
        return jsonify({"error": "Name and phone are required"}), 400

    # In production, save to database or send email
    # For now, log and return success
    print(f"[CONTACT FORM] {datetime.now().isoformat()}")
    print(f"  Name:    {name}")
    print(f"  Phone:   {phone}")
    print(f"  Email:   {email}")
    print(f"  Message: {message}")

    return jsonify({
        "success": True,
        "message": "Your inquiry has been received. Our team will contact you shortly."
    })


@app.route("/api/newsletter", methods=["POST"])
def api_newsletter():
    """Handle newsletter subscription."""
    data = request.get_json(silent=True)
    if not data:
        return jsonify({"error": "No data provided"}), 400

    email = data.get("email", "").strip()
    if not email or "@" not in email:
        return jsonify({"error": "Valid email is required"}), 400

    print(f"[NEWSLETTER] {datetime.now().isoformat()} - {email}")

    return jsonify({
        "success": True,
        "message": "You've been subscribed to our Alpha Alerts newsletter."
    })


# ---------------------------------------------------------------------------
# Static File Serving — React SPA
# ---------------------------------------------------------------------------

@app.route("/assets/<path:filename>")
def serve_assets(filename):
    """Serve built assets (JS, CSS, fonts, etc.)."""
    return send_from_directory(os.path.join(DIST_DIR, "assets"), filename)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_spa(path):
    """
    Catch-all route: serves the React SPA.
    - If the requested path matches a file in /dist, serve that file
    - Otherwise, serve index.html for client-side routing
    """
    # Check if the path corresponds to an actual file in dist
    full_path = os.path.join(DIST_DIR, path)
    if path and os.path.isfile(full_path):
        return send_from_directory(DIST_DIR, path)

    # Fallback to index.html for SPA routing
    return send_from_directory(DIST_DIR, "index.html")


# ---------------------------------------------------------------------------
# Error Handlers
# ---------------------------------------------------------------------------

@app.errorhandler(404)
def not_found(e):
    """Return JSON for API 404s, otherwise serve SPA."""
    if request.path.startswith("/api/"):
        return jsonify({"error": "Endpoint not found"}), 404
    return send_from_directory(DIST_DIR, "index.html")


@app.errorhandler(500)
def server_error(e):
    """Handle internal server errors."""
    return jsonify({"error": "Internal server error"}), 500


# ---------------------------------------------------------------------------
# Entry Point
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    debug = os.environ.get("FLASK_DEBUG", "true").lower() == "true"

    print(f"""
╔══════════════════════════════════════════════════╗
║   🏛️  Investors Clinic — Python Flask Server    ║
║                                                  ║
║   Frontend:  React SPA (pre-built)               ║
║   Backend:   Python / Flask                       ║
║   Port:      {port:<6}                             ║
║   Debug:     {str(debug):<6}                             ║
║                                                  ║
║   http://localhost:{port}                          ║
╚══════════════════════════════════════════════════╝
""")

    app.run(host="0.0.0.0", port=port, debug=debug)
