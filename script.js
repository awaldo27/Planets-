$(document).ready(function() {
    // Sun functionality
    $("#sun").on("mouseover", function() {
        // Make the paragraph disappear
        $("#disappear").css("display", "none");
        
        // Rotate the sun 180 degrees on z-axis
        $(this).css("transform", "rotateZ(180deg)");
    });
    
    $("#sun").on("mouseout", function() {
        // Make the paragraph reappear
        $("#disappear").css("display", "block");
        
        // Rotate back
        $(this).css("transform", "rotateZ(0deg)");
    });
    
    // Mercury functionality
    $("#mercury").on("click", function() {
        const mercuryFacts = [
            "Mercury is the smallest planet.",
            "Mercury is red.",
            "Mercury is the messenger god.",
            "Mercury is in thermometers.",
            "A day on mercury is equal to 59 Earth Days."
        ];
        
        const factCount = prompt("How many facts about Mercury would you like to see? (1 - 5)");
        
        if (factCount > 0) {
            let message = "Facts about Mercury:\n\n";
            
            for (let i = 0; i < factCount; i++) {
                // If the requested fact number is greater than available facts, show "undefined"
                let fact = (i < mercuryFacts.length) ? mercuryFacts[i] : "undefined";
                message += (i + 1) + ". " + fact + "\n";
            }
            
            alert(message);
        }
    });
    
    // Jupiter functionality
    let planetFactsDisplayed = false;
    
    // JSON object with planet facts - maintaining the structure but will display in specific order
    const planetData = {
        "planetfacts": [
            {
                "name": "Jupiter",
                "item": "is the largest plant."
            },
            {
                "name": "Venus",
                "item": "turns clockwise on its axis."
            },
            {
                "name": "Neptune",
                "item": "was the first planet located using math."
            },
            {
                "name": "Pluto",
                "item": "stopped being a planet in 2006."
            },
            {
                "name": "Saturn", 
                "item": "has 8 rings if you count the Cassini Division."
            }
        ]
    };
    
    $("#jupiter").on("click", function() {
        // Don't allow concatenation of facts
        if (!planetFactsDisplayed) {
            // Build facts list in exact specified order
            let factsList = "";
            
            // Loop through planet facts
            for (let i = 0; i < planetData.planetfacts.length; i++) {
                const planet = planetData.planetfacts[i];
                
                // Style based on planet name
                if (planet.name === "Jupiter") {
                    factsList += `<div style="color: red;">${planet.name} : ${planet.item}</div>`;
                } else if (planet.name === "Saturn") {
                    factsList += `<div style="font-size: 2.5em;">${planet.name} : ${planet.item}</div>`;
                } else {
                    factsList += `<div>${planet.name} : ${planet.item}</div>`;
                }
            }
            
            // Display facts
            $("#factsParagraph").html(factsList);
            
            // Move Jupiter button down
            $(this).css("top", "450px");
            
            // Set flag to prevent concatenation
            planetFactsDisplayed = true;
        }
    });
    
    // Jupiter rotation on mouseover
    $("#jupiter").on("mouseover", function() {
        $(this).css("transform", "rotateY(180deg)");
    });
    
    $("#jupiter").on("mouseout", function() {
        $(this).css("transform", "rotateY(0deg)");
    });
});