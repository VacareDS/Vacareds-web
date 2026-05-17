import json
import re

for file in ["messages/es.json", "messages/en.json"]:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace <br> with <br></br>
    content = content.replace("<br>", "<br></br>")
    
    data = json.loads(content)
    
    if "Case" in data["Home"] and "metrics" not in data["Home"]["Case"]:
        data["Home"]["Case"]["metrics"] = [
            { "num": "30%", "label": "Reservas desde web" },
            { "num": "6m", "label": "Desde inicio" },
            { "num": "2", "label": "Propiedades" }
        ]
        
    if "Stats" in data["Home"] and "stats" not in data["Home"]["Stats"]:
        data["Home"]["Stats"]["stats"] = [
            { "num": "30%", "label": "Facturación web (Supertramp)" },
            { "num": "100%", "label": "Pagos automatizados (sobremi)" },
            { "num": "0", "label": "Costo de hosting mensual" },
            { "num": "30d", "label": "Entrega promedio" }
        ]
        
    if "Team" in data["Home"] and "labels" not in data["Home"]["Team"]:
        data["Home"]["Team"]["labels"] = ["Delaware LLC", "Stripe", "Next.js", "n8n"]
        
    with open(file, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
