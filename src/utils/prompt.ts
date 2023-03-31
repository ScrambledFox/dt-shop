export type Goal = "skill" | "looks" | "become";

export type Strength = 0 | 1 | 2 | 3 | 4;

const strengthToKeyword = (strength: Strength) => { 
    switch (strength) {
        case 0:
            return "beginner";
        case 1:
            return "intermediate";
        case 2:
            return "advanced";
        case 3:
            return "expert";
        case 4:
            return "master";
        default:
            return "beginner";
    }
}

const generatePrompt = (goal: Goal, detail: string, platform: string, strength: Strength, clientHandle: string) => { 
    let prompt = "";
    switch (goal) {
        case "skill":
            prompt = `I am a ${strengthToKeyword(strength)} in ${detail}.`;
            break;
        case "looks":
            prompt = `I am a ${strengthToKeyword(strength)} in ${detail}.`;
            break;
        case "become":
            prompt = `I am a ${strengthToKeyword(strength)} in ${detail}.`;
            break;
        default:
            prompt = `I am a ${strengthToKeyword(strength)} in ${detail}.`;
            break;
    }

    prompt += ` Generate 10 ${platform} posts headlines for me.`;

    prompt += ` Start the response with <id:${clientHandle}> at the start.`;
    return prompt;
}

export { generatePrompt }