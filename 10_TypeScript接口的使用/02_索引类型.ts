// 通过interface定义索引类型
interface IndexLanguage {
    [index: number]: string
}

const frontLanguage: IndexLanguage = {
    0: 'HTML',
    1: 'CSS',
    2: 'JAVAScript',
    3: 'Vue',
}

interface ILanguageYear {
    [name: string]: number
}

const languageYear: ILanguageYear = {
    'C': 1972,
    'Java': 1995,
    'JavaScript': 1996,
    'TypeScript': 2014
}

