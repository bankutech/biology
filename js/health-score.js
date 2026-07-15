/**
 * Pure functions to calculate normalized health scores based on reference ranges.
 */

function getStatus(param, value) {
    const range = PARAM_RANGES[param];
    if (!range) return 'Normal'; // Default if not found

    if (range.criticalHigh !== undefined && value >= range.criticalHigh) return 'Critical High';
    if (range.criticalLow !== undefined && value <= range.criticalLow) return 'Critical Low';
    if (range.warningHigh !== undefined && value > range.warningHigh) return 'Warning High';
    if (range.warningLow !== undefined && value < range.warningLow) return 'Warning Low';
    return 'Normal';
}

function calculateScore(inputs) {
    let score = 100;
    let issues = [];

    // Weighting assumptions:
    // Critical out of range: -10 points
    // Warning out of range: -5 points
    // These are illustrative, not clinical.
    
    for (const [param, value] of Object.entries(inputs)) {
        if (value === null || isNaN(value)) continue;

        const status = getStatus(param, value);
        
        if (status.includes('Critical')) {
            score -= 10;
            issues.push({ param, value, status });
        } else if (status.includes('Warning')) {
            score -= 5;
            issues.push({ param, value, status });
        }
    }

    return {
        score: Math.max(0, score), // Ensure score doesn't go below 0
        issues: issues
    };
}
