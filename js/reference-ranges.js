// Centralized configuration for all blood parameters
// Ranges structured as { min: number, max: number, normal: [number, number] }
const PARAM_RANGES = {
    // Liver & Kidney
    creatinine: { normal: [0.6, 1.2], warningHigh: 1.3, warningLow: 0.5, criticalHigh: 2.0, criticalLow: 0.4 },
    gfr: { normal: [90, 120], warningLow: 60, criticalLow: 30, warningHigh: 130 },
    urea: { normal: [10, 50], warningHigh: 50, warningLow: 10, criticalHigh: 80, criticalLow: 5 },
    uricAcid: { normal: [2.0, 7.0], warningHigh: 7.0, warningLow: 2.0, criticalHigh: 9.0, criticalLow: 1.0 },
    ast: { normal: [0, 40], warningHigh: 40, criticalHigh: 100 },
    alt: { normal: [0, 56], warningHigh: 56, criticalHigh: 100 },
    ggtp: { normal: [0, 50], warningHigh: 50, criticalHigh: 150 },
    alp: { normal: [44, 120], warningHigh: 120, criticalHigh: 200 },
    bilirubin: { normal: [0.1, 1.2], warningHigh: 1.2, criticalHigh: 3.0 },
    totalProtein: { normal: [6.0, 8.3], warningHigh: 8.5, warningLow: 6.0, criticalHigh: 10.0, criticalLow: 5.0 },
    albumin: { normal: [3.5, 5.0], warningHigh: 5.0, warningLow: 3.5, criticalHigh: 6.0, criticalLow: 2.5 },
    globulin: { normal: [2.0, 3.5], warningHigh: 3.5, warningLow: 2.0, criticalHigh: 5.0, criticalLow: 1.5 },
    calcium: { normal: [8.5, 10.5], warningHigh: 10.5, warningLow: 8.5, criticalHigh: 12.0, criticalLow: 7.0 },
    phosphorus: { normal: [2.5, 4.5], warningHigh: 4.5, warningLow: 2.5, criticalHigh: 6.0, criticalLow: 1.5 },
    sodium: { normal: [135, 145], warningHigh: 145, warningLow: 135, criticalHigh: 150, criticalLow: 130 },
    potassium: { normal: [3.5, 5.0], warningHigh: 5.0, warningLow: 3.5, criticalHigh: 5.5, criticalLow: 3.0 },
    chloride: { normal: [98, 107], warningHigh: 107, warningLow: 98, criticalHigh: 110, criticalLow: 95 },
    // Lipid Profile
    cholesterol: { normal: [120, 200], warningHigh: 200, warningLow: 120, criticalHigh: 240, criticalLow: 100 },
    triglycerides: { normal: [50, 150], warningHigh: 150, warningLow: 50, criticalHigh: 200, criticalLow: 30 },
    hdl: { normal: [40, 100], warningLow: 40, criticalLow: 30 },
    ldl: { normal: [50, 130], warningHigh: 130, warningLow: 50, criticalHigh: 160, criticalLow: 30 },
    nonHdl: { normal: [0, 160], warningHigh: 160, criticalHigh: 190 },
    // Glucose Test
    glucose: { normal: [70, 100], warningHigh: 100, warningLow: 70, criticalHigh: 126, criticalLow: 50 },
    // Vitamin Tests
    vitaminB12: { normal: [200, 900], warningLow: 200, criticalLow: 150 },
    vitaminD: { normal: [30, 100], warningHigh: 100, warningLow: 30, criticalHigh: 150, criticalLow: 20 },
    // Thyroid Profile
    t3: { normal: [80, 200], warningHigh: 200, warningLow: 80, criticalHigh: 250, criticalLow: 50 },
    t4: { normal: [4.5, 12], warningHigh: 12, warningLow: 4.5, criticalHigh: 15, criticalLow: 2.0 },
    tsh: { normal: [0.4, 4.5], warningHigh: 4.5, warningLow: 0.4, criticalHigh: 10, criticalLow: 0.1 },
    // Diabetes Marker
    hba1c: { normal: [4.0, 5.7], warningHigh: 5.7, warningLow: 4.0, criticalHigh: 6.5, criticalLow: 3.0 }
};

// Map parameter to a readable name
const PARAM_NAMES = {
    creatinine: 'Creatinine', gfr: 'GFR', urea: 'Urea', uricAcid: 'Uric Acid',
    ast: 'AST', alt: 'ALT', ggtp: 'GGTP', alp: 'ALP', bilirubin: 'Bilirubin',
    totalProtein: 'Total Protein', albumin: 'Albumin', globulin: 'Globulin',
    calcium: 'Calcium', phosphorus: 'Phosphorus', sodium: 'Sodium',
    potassium: 'Potassium', chloride: 'Chloride', cholesterol: 'Cholesterol',
    triglycerides: 'Triglycerides', hdl: 'HDL', ldl: 'LDL', nonHdl: 'Non-HDL',
    glucose: 'Glucose', vitaminB12: 'Vitamin B12', vitaminD: 'Vitamin D',
    t3: 'T3', t4: 'T4', tsh: 'TSH', hba1c: 'HbA1c'
};
