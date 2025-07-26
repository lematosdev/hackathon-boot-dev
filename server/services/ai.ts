import { GoogleGenAI } from 'npm:@google/genai';
import dnd, {
	BackgroundTypes,
	ClassesType,
	RacesType,
	SubracesType,
} from '@types';

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function generateBackstory(character: {
	race: RacesType;
	class: ClassesType;
	background: BackgroundTypes;
	subrace: SubracesType;
	stats: Record<string, number>;
	level: number;
}) {
	const raceData = dnd.races2014[character.race];
	const classData = dnd.classes2014[character.class];
	const backgroundData = dnd.backgrounds2014[character.background];
	const subraceData = dnd.subraces2014[character.subrace];

	if (!raceData || !classData || !backgroundData || !subraceData) {
		throw new Error('Datos del personaje invalidos');
	}

	const systemInstruction =
		'Eres un experto en D&D 5e que responde basándose únicamente en los datos proporcionados.';

	const prompt = `
    Genera una backstory completa para este personaje de D&D 5e:

    DATOS DEL PERSONAJE:
    ${
		JSON.stringify(
			{
				race: {
					...raceData,
				},
				subrace: {
					...subraceData,
				},
				class: {
					...classData,
				},
				background: {
					...backgroundData,
				},
			},
			null,
			2,
		)
	}

    ESTADÍSTICAS:
    ${
		Object.entries(character.stats).map(([stat, value]) =>
			`${stat}: ${value}`
		).join(', ')
	}

    INSTRUCCIONES:
    1. Crea una historia de fondo que explique:
       - Cómo obtuvo sus habilidades de clase
       - Por qué tiene ese trasfondo específico
       - Cómo sus estadísticas reflejan su historia
       - Conexiones con los rasgos raciales

    2. La historia debe ser:
       - Coherente con todos los elementos mecánicos
       - Apropiada para el nivel ${character.level}
       - Rica en detalles pero concisa

    3. Sugiere rasgos de personalidad específicos basados en la combinación raza/clase/trasfondo

    Responde en el formato JSON especificado. 
    `;
	const response = await ai.models.generateContent({
		model: 'gemini-2.0-flash-001',
		contents: [prompt],
		config: {
			systemInstruction,
		},
	});

	let cleanResponse = response.text.replace(/```json\s*/gi, '');
	cleanResponse = cleanResponse.replace(/```\s*/g, '');

	return cleanResponse;
}
