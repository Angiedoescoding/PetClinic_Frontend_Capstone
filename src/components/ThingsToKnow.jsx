const thingsToKnowData = [
  { 
    name: 'Vomiting', 
    description: 'If your pet is vomiting, remove food and water for a few hours, then offer small amounts of water and a bland diet like boiled chicken or rice. If vomiting persists or is accompanied by other symptoms, consult your veterinarian.' 
  },
  { 
    name: 'Diarrhea', 
    description: 'For mild diarrhea, withhold food for 12-24 hours, then offer a bland diet such as boiled rice and boiled lean meat. Make sure your pet has access to clean water. If diarrhea persists or is severe, seek veterinary care.' 
  },
  { 
    name: 'Lethargy', 
    description: 'If your pet is lethargic, monitor their behavior and check for other symptoms such as fever or vomiting. Encourage rest and provide a comfortable, quiet environment. If lethargy persists or is accompanied by other concerning symptoms, contact your veterinarian.' 
  },
  { 
    name: 'Fever', 
    description: 'A fever in pets can indicate an underlying infection or inflammation. Monitor your pet\'s temperature with a thermometer. If your pet has a fever along with other symptoms such as lethargy or decreased appetite, contact your veterinarian.' 
  },
  { 
    name: 'Difficulty Breathing', 
    description: 'Difficulty breathing in pets can be a sign of respiratory problems or heart disease. Keep your pet calm and seek emergency veterinary care immediately. Do not delay treatment if you notice your pet struggling to breathe.' 
  },
  { 
    name: 'Seizures', 
    description: 'If your pet experiences a seizure, keep them safe from harm by removing nearby objects and providing a soft surface. Time the seizure duration and contact your veterinarian. Seek immediate veterinary attention if seizures last longer than a few minutes.' 
  },
  { 
    name: 'Bleeding', 
    description: 'Apply pressure to the bleeding area with a clean cloth or bandage. Elevate the injured area if possible. Seek veterinary care for severe bleeding or wounds that won\'t stop bleeding.' 
  },
  { 
    name: 'Heatstroke', 
    description: 'If your pet shows signs of heatstroke such as excessive panting, drooling, or collapse, move them to a cool, shaded area and apply cool water to their body. Contact your veterinarian immediately. Heatstroke is a medical emergency that requires prompt treatment.' 
  },
  { 
    name: 'Ingestion of Toxic Substances', 
    description: 'If you suspect your pet has ingested a toxic substance, contact your veterinarian or a pet poison control hotline immediately. Do not induce vomiting unless directed by a professional. Provide information about the ingested substance for proper treatment.' 
  },
  { 
    name: 'Broken Bones', 
    description: 'If your pet has a suspected broken bone, keep them as still and comfortable as possible. Use a makeshift splint if necessary and transport them to the nearest veterinary clinic. Do not attempt to set the bone yourself.' 
  },
];


function ThingsToKnow() {
  return (
    <div className="thingsToKnowMain">

    <h1>Things to know about your pet:</h1>
      <div className="thingsToKnowCards">
          {thingsToKnowData.map((item, index) => (
            <div className="thingsCard" key={index}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ThingsToKnow