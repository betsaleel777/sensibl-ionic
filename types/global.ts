interface Rule {
    id: number
    content: string
    title: string
}
interface Thematique {
    id: number
    texte: string;
    icon: string;
    content: string;
    rules: Array<Rule>
}

export type { Thematique, Rule }