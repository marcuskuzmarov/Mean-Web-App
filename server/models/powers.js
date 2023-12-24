const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for hero powers
const powersSchema = new Schema({
    "hero_names": {type: String, required: true},
    "Agility": { type: String },
    "Accelerated Healing": { type: String },
    "Lantern Power Ring": { type: String },
    "Dimensional Awareness": { type: String },
    "Cold Resistance": { type: String },
    "Durability": { type: String },
    "Stealth": { type: String },
    "Energy Absorption": { type: String },
    "Flight": { type: String },
    "Danger Sense": { type: String },
    "Underwater breathing": { type: String },
    "Marksmanship": { type: String },
    "Weapons Master": { type: String },
    "Power Augmentation": { type: String },
    "Animal Attributes": { type: String },
    "Longevity": { type: String },
    "Intelligence": { type: String },
    "Super Strength": { type: String },
    "Cryokinesis": { type: String },
    "Telepathy": { type: String },
    "Energy Armor": { type: String },
    "Energy Blasts": { type: String },
    "Duplication": { type: String },
    "Size Changing": { type: String },
    "Density Control": { type: String },
    "Stamina": { type: String },
    "Astral Travel": { type: String },
    "Audio Control": { type: String },
    "Dexterity": { type: String },
    "Omnitrix": { type: String },
    "Super Speed": { type: String },
    "Possession": { type: String },
    "Animal Oriented Powers": { type: String },
    "Weapon-based Powers": { type: String },
    "Electrokinesis": { type: String },
    "Darkforce Manipulation": { type: String },
    "Death Touch": { type: String },
    "Teleportation": { type: String },
    "Enhanced Senses": { type: String },
    "Telekinesis": { type: String },
    "Energy Beams": { type: String },
    "Magic": { type: String },
    "Hyperkinesis": { type: String },
    "Jump": { type: String },
    "Clairvoyance": { type: String },
    "Dimensional Travel": { type: String },
    "Power Sense": { type: String },
    "Shapeshifting": { type: String },
    "Peak Human Condition": { type: String },
    "Immortality": { type: String },
    "Camouflage": { type: String },
    "Element Control": { type: String },
    "Phasing": { type: String },
    "Astral Projection": { type: String },
    "Electrical Transport": { type: String },
    "Fire Control": { type: String },
    "Projection": { type: String },
    "Summoning": { type: String },
    "Enhanced Memory": { type: String },
    "Reflexes": { type: String },
    "Invulnerability": { type: String },
    "Energy Constructs": { type: String },
    "Force Fields": { type: String },
    "Self-Sustenance": { type: String },
    "Anti-Gravity": { type: String },
    "Empathy": { type: String },
    "Power Nullifier": { type: String },
    "Radiation Control": { type: String },
    "Psionic Powers": { type: String },
    "Elasticity": { type: String },
    "Substance Secretion": { type: String },
    "Elemental Transmogrification": { type: String },
    "Technopath/Cyberpath": { type: String },
    "Photographic Reflexes": { type: String },
    "Seismic Power": { type: String },
    "Animation": { type: String },
    "Precognition": { type: String },
    "Mind Control": { type: String },
    "Fire Resistance": { type: String },
    "Power Absorption": { type: String },
    "Enhanced Hearing": { type: String },
    "Nova Force": { type: String },
    "Insanity": { type: String },
    "Hypnokinesis": { type: String },
    "Animal Control": { type: String },
    "Natural Armor": { type: String },
    "Intangibility": { type: String },
    "Enhanced Sight": { type: String },
    "Molecular Manipulation": { type: String },
    "Heat Generation": { type: String },
    "Adaptation": { type: String },
    "Gliding": { type: String },
    "Power Suit": { type: String },
    "Mind Blast": { type: String },
    "Probability Manipulation": { type: String },
    "Gravity Control": { type: String },
    "Regeneration": { type: String },
    "Light Control": { type: String },
    "Echolocation": { type: String },
    "Levitation": { type: String },
    "Toxin and Disease Control": { type: String },
    "Banish": { type: String },
    "Energy Manipulation": { type: String },
    "Heat Resistance": { type: String },
    "Natural Weapons": { type: String },
    "Time Travel": { type: String },
    "Enhanced Smell": { type: String },
    "Illusions": { type: String },
    "Thirstokinesis": { type: String },
    "Hair Manipulation": { type: String },
    "Illumination": { type: String },
    "Omnipotent": { type: String },
    "Cloaking": { type: String },
    "Changing Armor": { type: String },
    "Power Cosmic": { type: String },
    "Biokinesis": { type: String },
    "Water Control": { type: String },
    "Radiation Immunity": { type: String },
    "Vision - Telescopic": { type: String },
    "Toxin and Disease Resistance": { type: String },
    "Spatial Awareness": { type: String },
    "Energy Resistance": { type: String },
    "Telepathy Resistance": { type: String },
    "Molecular Combustion": { type: String },
    "Omnilingualism": { type: String },
    "Portal Creation": { type: String },
    "Magnetism": { type: String },
    "Mind Control Resistance": { type: String },
    "Plant Control": { type: String },
    "Sonar": { type: String },
    "Sonic Scream": { type: String },
    "Time Manipulation": { type: String },
    "Enhanced Touch": { type: String },
    "Magic Resistance": { type: String },
    "Invisibility": { type: String },
    "Sub-Mariner": { type: String },
    "Radiation Absorption": { type: String },
    "Intuitive aptitude": { type: String },
    "Vision - Microscopic": { type: String },
    "Melting": { type: String },
    "Wind Control": { type: String },
    "Super Breath": { type: String },
    "Wallcrawling": { type: String },
    "Vision - Night": { type: String },
    "Vision - Infrared": { type: String },
    "Grim Reaping": { type: String },
    "Matter Absorption": { type: String },
    "The Force": { type: String },
    "Resurrection": { type: String },
    "Terrakinesis": { type: String },
    "Vision - Heat": { type: String },
    "Vitakinesis": { type: String },
    "Radar Sense": { type: String },
    "Qwardian Power Ring": { type: String },
    "Weather Control": { type: String },
    "Vision - X-Ray": { type: String },
    "Vision - Thermal": { type: String },
    "Web Creation": { type: String },
    "Reality Warping": { type: String },
    "Odin Force": { type: String },
    "Symbiote Costume": { type: String },
    "Speed Force": { type: String },
    "Phoenix Force": { type: String },
    "Molecular Dissipation": { type: String },
    "Vision - Cryo": { type: String },
    "Omnipresent": { type: String },
    "Omniscient": { type: String }
}, { timestamps: true });

const Powers = mongoose.model('Powers', powersSchema);
module.exports = Powers;