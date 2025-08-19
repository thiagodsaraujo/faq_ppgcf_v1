
// FAQ Data
const faqData = [
    {
    topic: "APOIO A EVENTOS CIENTÍFICOS",
    subtopic: "Regras Gerais",
    question: "A UEPB oferece ajuda de custo para apresentar trabalhos em congressos?",
    answer: "Sim, a UEPB oferece incentivos financeiros para docentes do quadro efetivo e professores visitantes participarem de eventos científicos ou tecnológicos, nacionais ou internacionais, com apresentação de trabalho.",
    details: [{
        icon: '✈️',
        category: 'Categoria Principal: Incentivo à Produção Científica',
        points: [
            "O apoio destina-se a custear a participação em eventos para divulgação de pesquisas.",
            "O programa visa fortalecer as políticas de Pós-Graduação e Pesquisa da universidade."
        ]
    }],
    legalBasis: "Art. 1º da Resolução/UEPB/CONSEPE/079/2015",
    documentation: "Formulário de solicitação, resumo do trabalho, carta de aceite, folder do evento, entre outros.",
    deadlines: "A solicitação deve ser feita com no mínimo 60 dias de antecedência do evento."
},
{
    topic: "APOIO A EVENTOS CIENTÍFICOS",
    subtopic: "Regras Gerais",
    question: "Que tipo de auxílio posso solicitar e quem tem direito?",
    answer: "Docentes efetivos e visitantes em pleno exercício podem solicitar OU passagens aéreas (classe econômica) OU até 4 diárias. Não é permitido solicitar ambos. Docentes afastados de suas atividades não têm direito ao auxílio.",
    details: [{
        icon: '💰',
        category: 'Categoria Principal: Modalidades de Auxílio',
        points: [
            "O solicitante deve escolher entre passagem OU diárias.",
            "As passagens são sempre em classe econômica, buscando o melhor custo-benefício.",
            "O limite é de 4 diárias, de acordo com a duração do evento.",
            "Apenas docentes do quadro efetivo ou visitantes podem solicitar."
        ]
    }],
    legalBasis: "Art. 2º e Art. 5º da Resolução/UEPB/CONSEPE/079/2015",
    documentation: "Formulário de solicitação específico para passagens ou diárias.",
    deadlines: "A solicitação deve ser feita com no mínimo 60 dias de antecedência."
},
{
    topic: "APOIO A EVENTOS CIENTÍFICOS",
    subtopic: "Regras Gerais",
    question: "Quais são os pré-requisitos para conseguir o auxílio?",
    answer: "Para ter o pedido aprovado, o trabalho a ser apresentado deve ter um aluno da UEPB como primeiro autor e o professor solicitante deve ter produção intelectual recente.",
    details: [{
        icon: '📋',
        category: 'Categoria Principal: Critérios de Elegibilidade',
        points: [
            "É obrigatório ter um trabalho aceito no evento, preferencialmente para apresentação oral.",
            "Para eventos nacionais, o primeiro autor deve ser um aluno de graduação, IC ou pós-graduação lato sensu da UEPB.",
            "Para eventos internacionais, o primeiro autor deve ser um aluno de pós-graduação stricto sensu da UEPB.",
            "O professor solicitante precisa ter publicado pelo menos um artigo, livro ou capítulo de livro nos últimos 3 anos."
        ]
    }],
    legalBasis: "Art. 3º da Resolução/UEPB/CONSEPE/079/2015",
    documentation: "Cópia do trabalho aceito, comprovante da produção intelectual recente, e documento que comprove o vínculo do aluno como primeiro autor.",
    deadlines: "O documento de aceite do trabalho pode ser enviado até 15 dias antes do evento."
},
{
    topic: "APOIO A EVENTOS CIENTÍFICOS",
    subtopic: "Regras Gerais",
    question: "Com que frequência posso solicitar este auxílio?",
    answer: "Existe um limite de solicitações para garantir que mais docentes possam ser beneficiados. É permitido um auxílio para congresso nacional por ano e um auxílio para congresso internacional a cada dois anos.",
    details: [{
        icon: '🗓️',
        category: 'Categoria Principal: Limites de Solicitação',
        points: [
            "Auxílio para evento nacional: 1 por ano.",
            "Auxílio para evento internacional: 1 a cada 2 anos."
        ]
    }],
    legalBasis: "Art. 4º da Resolução/UEPB/CONSEPE/079/2015",
    documentation: "N/A",
    deadlines: "O controle é feito com base nas solicitações anteriores do docente."
},
{
    topic: "APOIO A EVENTOS CIENTÍFICOS",
    subtopic: "Regras Gerais",
    question: "Como e quando devo fazer a prestação de contas?",
    answer: "Após o evento, o professor beneficiado tem um prazo de 15 dias para comprovar sua participação e a apresentação do trabalho junto à Pró-Reitoria de Pós-Graduação e Pesquisa (PRPGP).",
    details: [{
        icon: '🧾',
        category: 'Categoria Principal: Prestação de Contas',
        points: [
            "Apresentar o certificado de participação no congresso.",
            "Apresentar o comprovante de apresentação do trabalho.",
            "Entregar os bilhetes de viagem (canhotos dos cartões de embarque), caso tenha recebido passagens."
        ]
    }],
    legalBasis: "Art. 8º da Resolução/UEPB/CONSEPE/079/2015",
    documentation: "Certificados e bilhetes de viagem.",
    deadlines: "O prazo para entrega da documentação é de 15 dias após o término do evento."
},
{
    topic: "PÓS-DOUTORADO",
    subtopic: "Regras Gerais",
    question: "O que é e quem pode fazer o Estágio de Pós-Doutorado na UEPB?",
    answer: "É um estágio de pesquisa realizado por profissionais com título de doutor que não fazem parte do quadro efetivo da UEPB. O objetivo é desenvolver um projeto de pesquisa sob a supervisão de um docente de um programa de pós-graduação da universidade.",
    details: [{
        icon: '👨‍🔬',
        category: 'Categoria Principal: Definição e Público',
        points: [
            "Destinado a pesquisadores doutores externos à UEPB.",
            "As atividades são realizadas em regime de tempo integral ou parcial.",
            "O estágio é sempre vinculado a um projeto de pesquisa e a um supervisor credenciado em um programa de pós-graduação."
        ]
    }],
    legalBasis: "Art. 1º, § 1º da Resolução/UEPB/CONSEPE/008/2022",
    documentation: "Carta de aceite do supervisor, cópia do diploma de doutor, currículo lattes e plano de trabalho.",
    deadlines: "A duração mínima do estágio é de 3 meses."
},
{
    topic: "PÓS-DOUTORADO",
    subtopic: "Regras Gerais",
    question: "Além da pesquisa, quais outras atividades o pós-doutorando pode realizar?",
    answer: "O pós-doutorando pode atuar em diversas frentes, incluindo ensino na graduação e pós-graduação, orientação de iniciação científica e até mesmo coorientação de mestrado e doutorado, a critério do colegiado do programa.",
    details: [{
        icon: '📚',
        category: 'Categoria Principal: Atividades Permitidas',
        points: [
            "Atuar em disciplinas de graduação e pós-graduação, sempre sob a responsabilidade de um professor do quadro.",
            "Orientar estudantes de Iniciação Científica.",
            "Atuar como coorientador em dissertações e teses, se aprovado pelo colegiado.",
            "Pode se credenciar como orientador pleno, desde que cumpra os requisitos da CAPES e do programa."
        ]
    }],
    legalBasis: "Art. 1º, §§ 2º, 4º, 5º e 6º da Resolução/UEPB/CONSEPE/008/2022",
    documentation: "Todas as atividades devem estar previstas no Plano de Trabalho aprovado.",
    deadlines: "A coorientação e orientação dependem de aprovação específica do colegiado do programa."
},
{
    topic: "PÓS-DOUTORADO",
    subtopic: "Regras Gerais",
    question: "Como funciona o processo de candidatura ao Pós-Doutorado?",
    answer: "O candidato deve submeter um pedido ao Colegiado do Programa de Pós-Graduação de interesse, contendo a documentação necessária, incluindo uma carta de aceite do futuro supervisor e um plano de trabalho detalhado.",
    details: [{
        icon: '📝',
        category: 'Categoria Principal: Documentação para Candidatura',
        points: [
            "Carta de aceite de um professor supervisor do programa.",
            "Cópia do diploma de doutor.",
            "Curriculum Vitae (formato Lattes).",
            "Plano de trabalho detalhado com projeto de pesquisa, cronograma e origem dos recursos.",
            "Declaração de afastamento da instituição de origem (se houver vínculo e for dedicação exclusiva)."
        ]
    }],
    legalBasis: "Art. 3º da Resolução/UEPB/CONSEPE/008/2022",
    documentation: "A documentação completa deve ser submetida à secretaria do programa de interesse.",
    deadlines: "O processo pode ser em fluxo contínuo ou por meio de editais específicos, a depender do programa."
},
{
    topic: "PÓS-DOUTORADO",
    subtopic: "Regras Gerais",
    question: "Qual a duração do estágio e como funciona a renovação?",
    answer: "O estágio tem duração inicial de até 12 meses, podendo ser renovado anualmente até um limite máximo de 60 meses (5 anos). A duração mínima para que seja considerado um estágio de pós-doutorado é de 3 meses.",
    details: [{
        icon: '⏳',
        category: 'Categoria Principal: Duração e Prorrogação',
        points: [
            "Duração mínima: 3 meses.",
            "Duração inicial padrão: Até 12 meses.",
            "Duração máxima total: 60 meses (5 anos), mediante renovações anuais.",
            "A renovação depende da aprovação de um relatório de atividades pelo colegiado do programa."
        ]
    }],
    legalBasis: "Art. 4º, §§ 3º e 4º da Resolução/UEPB/CONSEPE/008/2022",
    documentation: "Para renovar, é preciso entregar um relatório anual de atividades com parecer do supervisor.",
    deadlines: "O relatório deve ser entregue ao final de cada ano de estágio para avaliação da renovação."
},
{
    topic: "PÓS-DOUTORADO",
    subtopic: "Regras Gerais",
    question: "O estágio de pós-doutorado gera algum vínculo empregatício ou título?",
    answer: "Não. A participação no estágio de pós-doutorado não gera qualquer vínculo empregatício ou funcional com a UEPB. Por ser um estágio acadêmico, ele não confere um novo título ao pesquisador, mas sim um certificado de conclusão.",
    details: [{
        icon: '📜',
        category: 'Categoria Principal: Natureza do Vínculo',
        points: [
            "Não há vínculo empregatício ou funcional.",
            "As atividades são de caráter voluntário, a menos que o pesquisador seja bolsista.",
            "Não confere um novo grau ou titulação.",
            "Ao final, o pesquisador recebe um certificado emitido pela Pró-Reitoria de Pós-Graduação e Pesquisa (PRPGP)."
        ]
    }],
    legalBasis: "Art. 8º e Art. 9º da Resolução/UEPB/CONSEPE/008/2022",
    documentation: "O Certificado de Conclusão é emitido pela PRPGP após a aprovação do relatório final.",
    deadlines: "O relatório final deve ser aprovado pelo colegiado do programa ao término do estágio."
},
{
    topic: "PROFESSOR VOLUNTÁRIO",
    subtopic: "Regras Gerais",
    question: "O que é o Programa de Professor e Técnico Voluntário (PPTAV)?",
    answer: "É um programa que permite a professores e técnicos administrativos, especialmente aposentados ou sem vínculo com a UEPB, a continuarem contribuindo com a universidade em atividades culturais, educacionais e científicas. O serviço é voluntário e não cria vínculo empregatício ou obrigação de remuneração.",
    details: [{
        icon: '🤝',
        category: 'Categoria Principal: Natureza do Vínculo',
        points: [
            "O programa é regido pela Lei Federal nº 9.608/1998.",
            "A participação é formalizada por um Termo de Adesão.",
            "Não gera vínculo empregatício, salário ou obrigações trabalhistas e previdenciárias para a UEPB.",
            "Busca evitar a descontinuidade em atividades de ensino, pesquisa e extensão."
        ]
    }],
    legalBasis: "Art. 1º e Art. 2º da Resolução/UEPB/CONSUNI/0208/2017",
    documentation: "Termo de Adesão firmado entre o voluntário e a UEPB.",
    deadlines: "A duração do vínculo é de no máximo 1 ano, renovável."
},
{
    topic: "PROFESSOR VOLUNTÁRIO",
    subtopic: "Regras Gerais",
    question: "Quem pode se candidatar para ser Professor Voluntário?",
    answer: "Podem se candidatar professores aposentados (da UEPB ou de outras instituições) ou profissionais sem vínculo com a UEPB que tenham reconhecida competência em sua área de atuação. Para atuar na pós-graduação stricto sensu, é exigido o título de Doutor.",
    details: [{
        icon: '🧑‍🏫',
        category: 'Categoria Principal: Requisitos para Adesão',
        points: [
            "Ser docente aposentado ou sem vínculo com a UEPB.",
            "Ter reconhecida competência na área de atuação.",
            "Ter um Plano de Trabalho aprovado pelas instâncias do curso ou programa.",
            "Para a Pós-Graduação (Mestrado/Doutorado), o título de Doutor é obrigatório."
        ]
    }],
    legalBasis: "Art. 3º e §2º da Resolução/UEPB/CONSUNI/0208/2017",
    documentation: "Requerimento formal, Plano de Trabalho e Curriculum Vitae (preferencialmente Lattes).",
    deadlines: "O processo de candidatura pode ser aberto a qualquer tempo, dependendo da aceitação da unidade de interesse."
},
{
    topic: "PROFESSOR VOLUNTÁRIO",
    subtopic: "Regras Gerais",
    question: "Quais atividades um Professor Voluntário pode desenvolver?",
    answer: "O Professor Voluntário pode realizar a maioria das atividades acadêmicas, como lecionar, pesquisar, participar de projetos de extensão, orientar alunos e participar de bancas examinadoras.",
    details: [{
        icon: '📚',
        category: 'Categoria Principal: Atividades Permitidas',
        points: [
            "Atividades de ensino na graduação e pós-graduação.",
            "Desenvolvimento de projetos de pesquisa e extensão.",
            "Orientação de alunos de TCC, mestrado e doutorado.",
            "Participação em bancas de monografia, dissertação, tese e concursos.",
            "Participação em reuniões de colegiado, com direito a voz, mas sem direito a voto."
        ]
    }],
    legalBasis: "Art. 4º da Resolução/UEPB/CONSUNI/0208/2017",
    documentation: "As atividades devem estar detalhadas e aprovadas no Plano de Trabalho.",
    deadlines: "As atividades devem ser executadas dentro do prazo de vigência do Termo de Adesão."
},
{
    topic: "PROFESSOR VOLUNTÁRIO",
    subtopic: "Regras Gerais",
    question: "Quais são os direitos e limitações do Professor Voluntário?",
    answer: "O voluntário tem direito de usar a infraestrutura da UEPB (bibliotecas, laboratórios) e a afiliação institucional. No entanto, não possui direitos administrativos, como votar ou ser votado para cargos de chefia ou representação.",
    details: [{
        icon: '⚖️',
        category: 'Categoria Principal: Direitos e Vedações',
        points: [
            "Direito de usar a denominação 'Professor Voluntário da UEPB'.",
            "Direito de acesso a espaços como laboratórios e bibliotecas.",
            "Direito a um e-mail institucional.",
            "Limitação: Não pode votar ou ser votado para cargos administrativos (Chefia, Coordenação, etc.).",
            "Limitação: Participa de reuniões colegiadas com direito a voz, mas sem direito a voto."
        ]
    }],
    legalBasis: "Art. 4º (§1º e §2º) e Art. 12 da Resolução/UEPB/CONSUNI/0208/2017",
    documentation: "Os direitos e deveres são formalizados no Termo de Adesão.",
    deadlines: "Os direitos são válidos durante a vigência do Termo de Adesão."
},
{
    topic: "PROFESSOR VOLUNTÁRIO",
    subtopic: "Regras Gerais",
    question: "Como é o processo para se tornar um Professor Voluntário?",
    answer: "O interessado deve formalizar um requerimento junto à unidade de interesse (Departamento ou Programa de Pós-Graduação), apresentando um Plano de Trabalho e seu currículo. O pedido será analisado e votado pelo colegiado da unidade.",
    details: [{
        icon: '📝',
        category: 'Categoria Principal: Processo de Adesão',
        points: [
            "1. Elaborar um requerimento e um Plano de Trabalho detalhando as atividades, período e carga horária semanal.",
            "2. Submeter o requerimento, o plano e o currículo ao colegiado do Departamento ou Programa.",
            "3. Aguardar o parecer da unidade, que tem 30 dias para se manifestar.",
            "4. Se aprovado, assinar o Termo de Adesão junto à UEPB, que será registrado na PROGEP."
        ]
    }],
    legalBasis: "Art. 6º, 7º e 8º da Resolução/UEPB/CONSUNI/0208/2017",
    documentation: "Requerimento, Plano de Trabalho e Curriculum Vitae.",
    deadlines: "O colegiado da unidade tem 30 dias para emitir parecer sobre a solicitação."
},
{
    topic: "PROFESSOR VOLUNTÁRIO",
    subtopic: "Regras Gerais",
    question: "Qual a duração do vínculo de voluntariado e como funciona a renovação?",
    answer: "O Termo de Adesão tem duração máxima de 1 (um) ano. É possível solicitar a renovação por igual período, seguindo os mesmos trâmites da solicitação inicial e incluindo um relatório das atividades já realizadas.",
    details: [{
        icon: '🔄',
        category: 'Categoria Principal: Duração e Renovação',
        points: [
            "Duração inicial: Máximo de 1 ano.",
            "Renovação: Permitida por mais 1 ano.",
            "Processo de Renovação: Requer a apresentação de um relatório de atividades e uma nova avaliação de desempenho.",
            "A solicitação de renovação passa pela mesma aprovação do colegiado da unidade."
        ]
    }],
    legalBasis: "Art. 9º da Resolução/UEPB/CONSUNI/0208/2017",
    documentation: "Para renovação, é necessário um relatório de atividades e uma nova solicitação.",
    deadlines: "A solicitação de renovação deve ser feita antes do término do prazo de vigência atual."
},
    {
    topic: "VIDA ACADÊMICA",
    subtopic: "Estágio de Docência",
    question: "Qual o objetivo do Estágio de Docência?",
    answer: "O Estágio de Docência busca preparar os pós-graduandos para a carreira de professor, criando oportunidades para aperfeiçoamento através da participação em atividades de ensino na graduação.",
    details: [{
        icon: '🎯',
        category: 'Categoria Principal: Formação Docente',
        points: [
            "Capacitar o pós-graduando para a docência no ensino superior.",
            "Promover a integração entre os programas de pós-graduação e os cursos de graduação.",
            "Melhorar a qualidade do ensino em ambos os níveis (graduação e pós-graduação)."
        ]
    }],
    legalBasis: "Art. 1º da Resolução/UEPB/CONSEPE/032/2011",
    documentation: "Plano de Trabalho e Relatório de Atividades.",
    deadlines: "O estágio deve ser realizado a partir do segundo período de matrícula no curso."
},
{
    topic: "VIDA ACADÊMICA",
    subtopic: "Estágio de Docência",
    question: "O Estágio de Docência é obrigatório para todos?",
    answer: "Sim, o estágio é uma atividade obrigatória para todos os alunos de mestrado e doutorado. No entanto, alunos que já são professores no Ensino Superior podem solicitar a dispensa da atividade.",
    details: [{
        icon: '🧑‍🏫',
        category: 'Categoria Principal: Obrigatoriedade e Dispensas',
        points: [
            "A obrigatoriedade visa integrar a formação do pós-graduando, conforme normas da CAPES.",
            "A dispensa não é automática e deve ser solicitada formalmente.",
            "A decisão final sobre a dispensa cabe ao Colegiado do Programa."
        ]
    }],
    legalBasis: "Art. 2º e Parágrafo Único da Resolução/UEPB/CONSEPE/032/2011",
    documentation: "Para dispensa, é necessário apresentar comprovante de exercício do magistério em Ensino Superior.",
    deadlines: "A solicitação de dispensa deve ser feita ao Colegiado do Programa."
},
{
    topic: "VIDA ACADÊMICA",
    subtopic: "Estágio de Docência",
    question: "Qual a duração e a carga horária do estágio?",
    answer: "A duração varia entre mestrado e doutorado, com uma carga horária semanal limitada para não prejudicar as outras atividades do pós-graduando.",
    details: [{
        icon: '⏳',
        category: 'Categoria Principal: Duração e Carga Horária',
        points: [
            "Mestrado: Duração mínima de 1 semestre e máxima de 2 semestres.",
            "Doutorado: Duração mínima de 2 semestres e máxima de 3 semestres.",
            "Carga Horária Semanal: Máximo de 4 horas semanais."
        ]
    }],
    legalBasis: "Art. 3º e Art. 4º da Resolução/UEPB/CONSEPE/032/2011",
    documentation: "O Plano de Trabalho detalhará a distribuição da carga horária.",
    deadlines: "A carga horária deve ser cumprida durante o semestre letivo em que o aluno está matriculado na atividade."
},
{
    topic: "VIDA ACADÊMICA",
    subtopic: "Estágio de Docência",
    question: "Quais atividades posso realizar durante o Estágio de Docência?",
    answer: "O estágio permite a participação em diversas atividades acadêmicas, sendo a regência de uma porcentagem das aulas teóricas ou práticas uma das principais.",
    details: [{
        icon: '📚',
        category: 'Categoria Principal: Atividades Desenvolvidas',
        points: [
            "Participar da elaboração do plano de ensino e de aulas.",
            "Preparar e ministrar aulas teóricas e/ou práticas (mínimo de 20% e máximo de 30% da carga horária do componente).",
            "Auxiliar no processo de avaliação dos alunos de graduação.",
            "Supervisionar projetos de Iniciação Científica e TCCs.",
            "Apresentar seminários ou palestras."
        ]
    }],
    legalBasis: "Art. 5º da Resolução/UEPB/CONSEPE/032/2011",
    documentation: "As atividades devem ser detalhadas no Plano de Trabalho.",
    deadlines: "As atividades devem seguir o cronograma aprovado no Plano de Trabalho."
},
{
    topic: "VIDA ACADÊMICA",
    subtopic: "Estágio de Docência",
    question: "Como funciona a matrícula e a atribuição de créditos do estágio?",
    answer: "O aluno se matricula em um Componente Curricular específico de Estágio de Docência. A atividade gera créditos que são adicionais à grade curricular regular do curso.",
    details: [{
        icon: '📊',
        category: 'Categoria Principal: Matrícula e Créditos',
        points: [
            "Mestrado: Até 2 créditos (30 horas).",
            "Doutorado: Até 4 créditos (60 horas).",
            "Créditos Adicionais: Não substituem os créditos obrigatórios ou eletivos do programa.",
            "Matrícula: Realizada a partir do segundo período do curso."
        ]
    }],
    legalBasis: "Art. 6º, §1º, §2º e Art. 7º da Resolução/UEPB/CONSEPE/032/2011",
    documentation: "A matrícula é formalizada na Secretaria do Programa, com a entrega do Plano de Trabalho.",
    deadlines: "A matrícula deve ser feita no período letivo em que o estágio será realizado."
},
{
    topic: "VIDA ACADÊMICA",
    subtopic: "Estágio de Docência",
    question: "Preciso de um Plano de Trabalho? O que ele deve conter?",
    answer: "Sim, um Plano de Trabalho detalhado é obrigatório. Ele deve ser elaborado em conjunto com seu orientador e aprovado pelo Colegiado do Programa e pelo Departamento responsável.",
    details: [{
        icon: '📋',
        category: 'Categoria Principal: Planejamento do Estágio',
        points: [
            "Conteúdo: Justificativa, objetivos, carga horária semanal, cronograma de atividades e referências.",
            "Assinaturas: Deve ser assinado por você (aluno), seu orientador e o professor do Componente Curricular (se for diferente do orientador).",
            "Aprovação: O plano precisa ser aprovado antes do início das atividades."
        ]
    }],
    legalBasis: "Art. 8º da Resolução/UEPB/CONSEPE/032/2011",
    documentation: "O Plano de Trabalho deve ser entregue na Secretaria do Programa no ato da matrícula na disciplina de estágio.",
    deadlines: "O plano deve ser submetido antes do início do período letivo do estágio."
},
{
    topic: "VIDA ACADÊMICA",
    subtopic: "Estágio de Docência",
    question: "Como serei avaliado no Estágio de Docência?",
    answer: "A avaliação é feita com base em um relatório final que você elabora ao concluir as atividades. O relatório é avaliado pelo seu orientador e, posteriormente, pelo Colegiado do Programa.",
    details: [{
        icon: '✅',
        category: 'Categoria Principal: Avaliação e Conclusão',
        points: [
            "Relatório Parcial: Um relatório sobre as atividades de sala de aula deve ser entregue ao professor do componente em até 15 dias após sua conclusão.",
            "Relatório Final: Um relatório completo, assinado por você e seu orientador (com o parecer dele anexado), deve ser entregue ao Colegiado em até 30 dias após o fim de todas as atividades.",
            "Resultado: O Colegiado pode aprovar, solicitar complementações ou reprovar o relatório. Em caso de reprovação, um novo estágio deverá ser realizado."
        ]
    }],
    legalBasis: "Art. 10, Art. 11 e Art. 12 da Resolução/UEPB/CONSEPE/032/2011",
    documentation: "Relatório de Estágio de Docência, conforme modelo ou diretrizes do programa.",
    deadlines: "Relatório Parcial (15 dias após fim das aulas), Relatório Final (30 dias após fim de todas as atividades)."
},
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Processo Seletivo Regular", question: "Como funciona o processo seletivo regular?", answer: "O processo seletivo é a porta de entrada oficial para o programa, regido por um edital público que detalha todas as regras, datas e documentos necessários.", details: [{ icon: '📝', category: 'Categoria Principal: Processo Seletivo', points: ["Edital: É o documento mais importante, publicado com no mínimo 30 dias de antecedência. Define vagas, critérios, cronograma e documentação.", "Inscrição: Geralmente online, exige o preenchimento de formulários e o envio de documentos digitalizados.", "Fluxo Contínuo: O programa pode optar por um modelo de 'fluxo contínuo', permitindo inscrições em qualquer época do ano, conforme edital."] }], legalBasis: "Art. 79 (Normatização), Art. 81 (Fluxo Contínuo), Art. 87 (Comissão de Seleção), Art. 88 (Validade do Processo)", documentation: "Requerimento de inscrição, Formulário de inscrição, Cópia do diploma (ou declaração), Histórico escolar, Currículo Lattes, Comprovante de taxa.", deadlines: "Publicação do Edital: Mínimo 30 dias antes das inscrições. Recursos: Prazo definido no edital, com o Colegiado como primeira instância." },
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Matrícula Institucional", question: "Fui aprovado! Como faço a matrícula institucional?", answer: "A matrícula institucional é o ato que oficializa seu vínculo com a UEPB. Perder o prazo significa perder a vaga, mesmo tendo sido aprovado.", details: [{ icon: '🔗', category: 'Categoria Principal: Vínculo Acadêmico', points: ["Procedimento: Realizada na secretaria do programa, dentro do prazo estipulado no calendário acadêmico.", "Condição: É um pré-requisito para a primeira matrícula em disciplinas.", "Vedação: É proibido manter matrícula simultânea em mais de um curso de pós-graduação stricto sensu na UEPB."] }], legalBasis: "Art. 100 (Obrigatoriedade e Prazos), Art. 101 (Vedação de Matrícula Simultânea), Art. 102 (Diplomas Estrangeiros), Art. 103 (Matrícula Semestral)", documentation: "Documentos listados no edital de seleção (diploma, histórico, documentos pessoais, etc.).", deadlines: "Prazo definido no calendário escolar do programa. A não efetivação resulta em perda automática da vaga (Art. 100, §4º)." },
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Transferência", question: "Posso me transferir de outro programa de mestrado/doutorado para o PPGCF?", answer: "Sim, a transferência é possível, mas depende da existência de vagas, da aprovação do Colegiado e do cumprimento de requisitos específicos.", details: [{ icon: '🔄', category: 'Categoria Principal: Mobilidade Acadêmica', points: ["Requisitos: Ser aluno regular de um programa com conceito CAPES igual ou superior, ter cursado no mínimo 6 meses e ter o aceite formal de um orientador do PPGCF.", "Processo: A solicitação deve ser aprovada pelos Colegiados de ambos os programas (origem e destino)."] }], legalBasis: "Art. 86, §1º (Admissão por Transferência), Art. 105 (Condições Mínimas)", documentation: "Requerimento formal, Histórico escolar de origem, Ementas das disciplinas, Carta de aceite do novo orientador, Carta de anuência do programa de origem.", deadlines: "O tempo de curso já cumprido na origem é contabilizado no prazo máximo. A decisão final é do Colegiado do PPGCF." },
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Reingresso", question: "Fui desligado do programa. Posso tentar entrar novamente?", answer: "Sim, mas existe um período de carência obrigatório. O reingresso não é automático e exige a participação em um novo processo seletivo.", details: [{ icon: '⏳', category: 'Categoria Principal: Reingresso', points: ["Carência: É necessário aguardar um prazo mínimo de 12 meses após a data do desligamento para se inscrever em um novo processo seletivo.", "Nova Matrícula: Se aprovado, o reingresso é considerado uma matrícula nova, sem aproveitamento automático de créditos."] }], legalBasis: "Art. 80 (Prazo de Carência), Art. 112 (Reingresso como Nova Matrícula)", documentation: "A mesma documentação exigida no edital de seleção para novos candidatos.", deadlines: "Prazo mínimo de espera de 12 meses. O candidato compete normalmente no novo processo seletivo." },
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Aluno Especial", question: "O que é um 'Aluno Especial' e como funciona?", answer: "Aluno Especial é aquele que cursa disciplinas isoladas no programa sem ter um vínculo regular. É uma ótima forma de conhecer o programa ou adiantar créditos.", details: [{ icon: '🧑‍🏫', category: 'Categoria Principal: Participação Avulsa', points: ["Direitos: Pode frequentar as aulas e receber um certificado de conclusão da disciplina.", "Limitações: Não tem orientador, não pode receber bolsa e não tem os mesmos direitos de um aluno regular.", "Aproveitamento: Créditos cursados nos últimos 5 anos podem ser aproveitados se o aluno ingressar como regular."] }], legalBasis: "Art. 75 (Definição), Art. 76 (Regras de Aceitação), Arts. 77 e 78 (Possibilidade para alunos de graduação e pesquisadores)", documentation: "Geralmente, diploma de graduação, histórico, currículo e carta de interesse.", deadlines: "Inscrição conforme calendário acadêmico. A aceitação é aprovada pelo Colegiado." },
    { topic: "ESTRUTURA E GOVERNANÇA", subtopic: "Atribuições do Colegiado", question: "Quais são as principais responsabilidades do Colegiado?", answer: "O Colegiado é o órgão máximo de deliberação do programa. Ele define e aprova todas as normas acadêmicas, pedagógicas e administrativas, sendo a principal instância de recurso para decisões da Coordenação.", details: [{ icon: '🏛️', category: 'Principais Competências', points: ["Propor e aprovar alterações no regimento do programa.", "Definir o número de vagas e aprovar editais de seleção.", "Deliberar sobre aproveitamento de créditos, transferências, trancamentos e desligamentos.", "Designar orientadores, coorientadores e homologar comissões examinadoras (bancas).", "Aprovar o calendário acadêmico e a oferta de disciplinas para cada período."] }], legalBasis: "Art. 30, 31, 32", documentation: "Atas de reunião do Colegiado.", deadlines: "As decisões são tomadas em reuniões regulares (pelo menos uma vez por mês) ou extraordinárias." },
    { topic: "ESTRUTURA E GOVERNANÇA", subtopic: "Atribuições da Coordenação", question: "Quais são as funções da Coordenação do Programa?", answer: "A Coordenação é o órgão executivo que administra o dia a dia do programa. Ela executa as decisões do Colegiado, representa o programa e garante o cumprimento de todas as normas e prazos.", details: [{ icon: '🧑‍💼', category: 'Principais Funções', points: ["Presidir as reuniões do Colegiado e executar suas decisões.", "Elaborar e enviar os relatórios para a CAPES (Plataforma Sucupira).", "Gerenciar a aplicação de recursos financeiros (como o PROAP).", "Organizar o calendário acadêmico e fiscalizar o cumprimento das atividades.", "Tomar decisões urgentes 'ad referendum', que devem ser ratificadas pelo Colegiado na reunião seguinte."] }], legalBasis: "Art. 33, 34, 35", documentation: "Relatórios anuais, planos de aplicação de recursos, editais.", deadlines: "Responsável por cumprir os prazos estabelecidos pela CAPES e pela UEPB." },
    { topic: "ESTRUTURA E GOVERNANÇA", subtopic: "Atribuições da Secretaria", question: "Qual o papel da Secretaria do Programa?", answer: "A Secretaria é o órgão de apoio administrativo que executa as funções burocráticas e de controle acadêmico. É o principal ponto de contato para discentes e docentes para questões documentais e de rotina.", details: [{ icon: '🗗', category: 'Principais Tarefas', points: ["Organizar e processar inscrições, matrículas e outros requerimentos.", "Manter atualizados os arquivos, cadastros e históricos de discentes e docentes.", "Secretariar reuniões do Colegiado, defesas e exames de qualificação.", "Controlar a tramitação de correspondências e documentos oficiais do programa."] }], legalBasis: "Art. 36, 37", documentation: "Processos de matrícula, históricos escolares, arquivos de trabalhos finais.", deadlines: "Atuação contínua para garantir o bom funcionamento administrativo." },
    { topic: "CORPO DOCENTE", subtopic: "Credenciamento e Categorias", question: "Como um professor se torna parte do corpo docente do programa?", answer: "Um professor ou pesquisador com título de doutor pode ser autorizado a participar do programa (credenciado) em uma de três categorias: Permanente, Visitante ou Colaborador, após aprovação pelo Colegiado.", details: [{ icon: '🧑‍🏫', category: 'Categorias Docentes', points: ["Permanente: Núcleo principal do programa, com atuação contínua em ensino, pesquisa e orientação.", "Visitante: Docente externo contratado por tempo determinado para colaborar com o programa.", "Colaborador: Participa de forma complementar em projetos, aulas ou orientações, sem os mesmos vínculos do docente permanente."] }], legalBasis: "Art. 43, 44, 45, 46, 49", documentation: "Edital de credenciamento, Currículo Lattes, projeto de pesquisa.", deadlines: "O credenciamento ocorre periodicamente, conforme editais publicados pelo programa." },
    { topic: "CORPO DOCENTE", subtopic: "Deveres do Orientador", question: "Quais são as principais responsabilidades do meu orientador?", answer: "O orientador é responsável por guiar o discente em toda a sua trajetória acadêmica, desde o planejamento dos estudos e escolha de disciplinas até a elaboração e defesa do trabalho final.", details: [{ icon: '🧭', category: 'Principais Atribuições', points: ["Assistir o orientando no planejamento acadêmico e na matrícula.", "Acompanhar e avaliar o desempenho do discente.", "Auxiliar na preparação do projeto e do trabalho final.", "Propor o desligamento do orientando em caso de não cumprimento das atividades.", "Sugerir nomes para bancas e autorizar a defesa do trabalho final."] }], legalBasis: "Art. 69", documentation: "Relatórios de desempenho, pareceres em solicitações do discente.", deadlines: "Acompanhamento contínuo durante todo o curso do orientando." },
    { topic: "QUESTÕES FINANCEIRAS", subtopic: "Bolsas de Estudo", question: "Como funciona a concessão de bolsas de estudo?", answer: "As bolsas não são automáticas e dependem da disponibilidade de cotas das agências de fomento (como a CAPES). A seleção é baseada no mérito acadêmico.", details: [{ icon: '💰', category: 'Categoria Principal: Fomento e Auxílio', points: ["Comissão de Bolsas: Cada programa possui uma comissão responsável por definir os critérios de seleção e acompanhar os bolsistas.", "Critérios de Seleção: Priorizam o mérito acadêmico, geralmente baseado na classificação do processo seletivo.", "Renovação: A bolsa é concedida por 12 meses, renovável anualmente até o limite do curso, mediante bom desempenho."] }], legalBasis: "Art. 167 (Comissão de Bolsas), Art. 168 (Requisitos), Art. 169 (Renovação)", documentation: "Documentos que comprovem ausência de vínculo empregatício remunerado, Termo de compromisso da agência de fomento.", deadlines: "Seleção realizada pela Comissão de Bolsas após o resultado do processo seletivo de ingresso." },
    { topic: "QUESTÕES FINANCEIRAS", subtopic: "Dedicação Exclusiva", question: "Posso trabalhar e receber bolsa ao mesmo tempo?", answer: "Não. A bolsa de estudos exige dedicação integral às atividades do programa.", details: [{ icon: '🚫', category: 'Categoria Principal: Vedações e Regras', points: ["Dedicação Exclusiva: O bolsista deve ter dedicação integral ao curso, o que impede o acúmulo com atividades profissionais remuneradas.", "Exceções: A própria agência de fomento pode prever exceções específicas em seus regulamentos.", "Consequências: O descumprimento leva ao cancelamento da bolsa e à obrigação de ressarcir os valores recebidos."] }], legalBasis: "Art. 168, incisos II e IV (Exigência de Dedicação Integral)", documentation: "Declaração de não acúmulo de bolsas e de ausência de vínculo empregatício.", deadlines: "O aluno é responsável por manter sua condição de dedicação exclusiva e informar qualquer alteração à coordenação." },
    { topic: "VIDA ACADÊMICA", subtopic: "Créditos Mínimos", question: "Quantos créditos preciso para concluir o curso?", answer: "O programa exige um número mínimo de créditos em disciplinas, que devem ser integralizados dentro do prazo do curso.", details: [{ icon: '📊', category: 'Categoria Principal: Estrutura Curricular', points: ["Mestrado: Mínimo de 18 créditos.", "Doutorado: Mínimo de 27 créditos.", "Definição de Crédito: 1 crédito = 15h de aula teórica ou 30h de aula prática.", "Observação: Créditos da dissertação/tese não entram nesta contagem."] }], legalBasis: "Art. 115 (Limites Mínimos de Créditos)", documentation: "O controle é feito via histórico escolar.", deadlines: "Os créditos devem ser cumpridos dentro do prazo máximo do curso. O aluno e o orientador são responsáveis pelo planejamento." },
    { topic: "VIDA ACADÊMICA", subtopic: "Avaliação e Aprovação", question: "Como funciona a avaliação nas disciplinas?", answer: "A aprovação em uma disciplina depende de nota e frequência mínimas.", details: [{ icon: '✅', category: 'Categoria Principal: Desempenho Acadêmico', points: ["Nota Mínima: Aprovação exige nota igual ou superior a 7,0 (Conceito C).", "Frequência Mínima: É obrigatória a presença em, no mínimo, 75% das aulas.", "CRE (Coeficiente de Rendimento Escolar): Manter o CRE acima de 7,0 é condição para a permanência no programa."] }], legalBasis: "Art. 125 (Sistema de Notas), Art. 126 (Frequência Mínima), Art. 110, inciso VI (Desligamento por CRE baixo)", documentation: "Não se aplica.", deadlines: "O professor tem até 30 dias após o término da disciplina para lançar as notas. Reprovar 2x na mesma disciplina ou ter CRE < 7,0 leva ao desligamento." },
    { topic: "VIDA ACADÊMICA", subtopic: "Estágio de Docência", question: "O Estágio de Docência é obrigatório?", answer: "Sim, o estágio de docência é uma atividade acadêmica obrigatória para bolsistas, visando a formação para o ensino superior. Discentes que já são professores podem solicitar a dispensa da atividade.", details: [{ icon: '👨‍🏫', category: 'Detalhes do Estágio', points: ["É obrigatório para discentes bolsistas.", "Mestrandos devem cursar por um semestre; doutorandos por dois semestres.", "As atividades são supervisionadas pelo orientador e por um professor da graduação.", "Ao final, o discente deve elaborar um relatório para obter os créditos."] }], legalBasis: "Art. 118", documentation: "Relatório de atividades do estágio.", deadlines: "Deve ser cumprido dentro do prazo regular do curso." },
    { topic: "VIDA ACADÊMICA", subtopic: "Aproveitamento de Estudos", question: "Posso aproveitar créditos de outros cursos de pós-graduação?", answer: "Sim, o Colegiado pode aceitar créditos de disciplinas cursadas em outros programas de pós-graduação (stricto ou lato sensu), desde que tenham sido concluídas nos últimos 5 anos e sejam relevantes para sua formação.", details: [{ icon: '📚', category: 'Regras para Aproveitamento', points: ["O componente curricular deve ter sido concluído há, no máximo, 5 anos.", "A nota obtida deve ser igual ou superior a 7,0 (ou conceito C).", "O número máximo de créditos a serem aproveitados é definido no regimento de cada programa.", "É necessário apresentar requerimento com histórico escolar e ementas das disciplinas."] }], legalBasis: "Art. 129, Art. 130", documentation: "Requerimento formal, histórico escolar e ementas das disciplinas cursadas.", deadlines: "A solicitação deve ser feita formalmente à coordenação do programa." },
    { topic: "PRAZOS E SITUAÇÕES ESPECIAIS", subtopic: "Prazos do Curso", question: "Qual o prazo máximo para concluir o mestrado/doutorado?", answer: "O regimento estabelece prazos mínimos e máximos para a conclusão do curso, contados a partir da data da primeira matrícula.", details: [{ icon: '⏳', category: 'Categoria Principal: Prazos Regimentais', points: ["Mestrado: Mínimo de 1 ano e máximo de 2 anos e 6 meses (30 meses).", "Doutorado: Mínimo de 2 anos e máximo de 5 anos (60 meses).", "Prorrogação: Em casos excepcionais, o Colegiado pode conceder uma prorrogação de até 6 meses (mestrado) ou 12 meses (doutorado)."] }], legalBasis: "Art. 113 (Prazos), Art. 114 (Prorrogação)", documentation: "Para prorrogação: Requerimento formal, justificativa, parecer do orientador, versão preliminar do trabalho, cronograma.", deadlines: "A solicitação de prorrogação deve ser feita ANTES do vencimento do prazo regular. A decisão é do Colegiado." },
    { topic: "ORIENTAÇÃO", subtopic: "Definição e Troca de Orientador", question: "Como funciona a definição e a troca de orientador?", answer: "Todo aluno tem direito a um orientador, que é formalizado pelo Colegiado. A troca é possível, mas é um processo que requer acordo e aprovação.", details: [{ icon: '🤝', category: 'Categoria Principal: Relação Orientador-Orientando', points: ["Definição: Designado pelo Colegiado, com base na indicação do aluno e afinidade de pesquisa.", "Mudança pelo Aluno: O aluno pode solicitar a troca, com anuência do orientador atual e do novo.", "Conflito: Em caso de discordância, a decisão final sobre a troca cabe ao Colegiado."] }], legalBasis: "Art. 65 (Definição), Art. 66 (Mudança pelo Discente), Art. 32, inciso XXI (Atribuição do Colegiado)", documentation: "Para troca: Requerimento formal, justificativa, carta de anuência/aceite.", deadlines: "O Colegiado tem até 30 dias para designar um novo orientador em caso de vacância." },
    { topic: "ORIENTAÇÃO", subtopic: "Definição e Troca de Orientador", question: "Um orientador pode deixar de me orientar?", answer: "Sim, um orientador pode solicitar ao Colegiado o direito de abdicar da orientação de um discente. Isso deve ser feito através de uma justificativa formal e circunstanciada, baseada nos relatórios de desempenho do aluno.", details: [{ icon: '👋', category: 'Abdicação da Orientação', points: ["Direito do Orientador: É facultado ao orientador o direito de abdicar da orientação.", "Justificativa: A solicitação deve ser formal e bem fundamentada.", "Aprovação: O pedido precisa ser submetido e aprovado pelo Colegiado do programa.", "Novo Orientador: Em caso de aprovação, o Colegiado designará um novo orientador em até 30 dias."] }], legalBasis: "Art. 67 (Abdicação pelo Orientador), Art. 68 (Tutela da Coordenação)", documentation: "Justificativa formal do orientador.", deadlines: "A decisão final é do Colegiado." },
    { topic: "DEFESA E DIPLOMAÇÃO", subtopic: "Exame de Qualificação", question: "O que é o Exame de Qualificação?", answer: "O exame de qualificação (ou pré-banca) é uma etapa obrigatória para o doutorado que avalia a capacidade do discente de realizar uma pesquisa original. É um marco importante que antecede a defesa final da tese.", details: [{ icon: '🧐', category: 'Processo de Qualificação', points: ["Objetivo: Avaliar a maturidade da pesquisa e a capacidade do discente.", "Obrigatoriedade: É obrigatório para o Doutorado e pode ser exigido no Mestrado, conforme o regimento do programa.", "Banca: Composta por no mínimo três doutores, aprovada pelo Colegiado.", "Resultado: O discente pode ser 'Aprovado' ou 'Reprovado'. Em caso de reprovação, há uma única chance de repetir o exame."] }], legalBasis: "Art. 147, 148, 149, 150", documentation: "Versão do trabalho para a banca, requerimento de agendamento.", deadlines: "O prazo para a segunda tentativa é de até 120 dias (Doutorado) ou 60 dias (Mestrado) após a primeira." },
    { topic: "DEFESA E DIPLOMAÇÃO", subtopic: "Requisitos para Defesa", question: "O que preciso fazer para poder defender minha dissertação/tese?", answer: "Para marcar a defesa, é preciso ter cumprido uma série de requisitos acadêmicos e administrativos, formando um checklist obrigatório.", details: [{ icon: '🏁', category: 'Categoria Principal: Conclusão de Curso', points: ["Checklist: Créditos integralizados, aprovação na qualificação, proficiência em língua estrangeira, estágio docência cumprido, declaração de não plágio e recomendação do orientador."] }], legalBasis: "Art. 151 (Requisitos para a Defesa)", documentation: "Requerimento de agendamento, autorização do orientador, versão do trabalho para a banca, sugestão de nomes para a comissão, comprovantes de todos os requisitos.", deadlines: "O Colegiado tem até 30 dias para homologar a banca, e a defesa deve ser marcada em até 30 dias após a homologação." },
    { topic: "DEFESA E DIPLOMAÇÃO", subtopic: "Banca e Resultados", question: "Como funciona a banca de defesa e quais os possíveis resultados?", answer: "A defesa é uma sessão pública julgada por uma comissão de especialistas. O resultado pode ser aprovação, aprovação com correções ou reprovação.", details: [{ icon: '🧑‍⚖️', category: 'Categoria Principal: Banca Examinadora', points: ["Composição (Mestrado): Orientador + 2 especialistas (1 externo).", "Composição (Doutorado): Orientador + 4 especialistas (2 externos, 1 de outra instituição).", "Resultados: Aprovado(a), Insuficiente (com prazo para correções), Reprovado(a) (leva ao desligamento)."] }], legalBasis: "Art. 156 (Composição da Banca), Art. 157 (Resultados)", documentation: "Ata da sessão de defesa pública.", deadlines: "Prazo para correções (se 'Insuficiente'): 90 dias (Mestrado) ou 180 dias (Doutorado)." },
    { topic: "DEFESA E DIPLOMAÇÃO", subtopic: "Diplomação", question: "Fui aprovado! Como faço para solicitar o diploma?", answer: "Após a aprovação e a realização das correções, é preciso depositar a versão final do trabalho no repositório da UEPB e, então, solicitar formalmente a expedição do diploma.", details: [{ icon: '📜', category: 'Categoria Principal: Diplomação', points: ["Depósito Final: A versão final corrigida (PDF/A com ficha catalográfica) deve ser depositada no Repositório Institucional em até 30 dias após a defesa.", "Solicitação do Diploma: O processo é aberto pelo aluno junto à PRPGP, com toda a documentação comprobatória."] }], legalBasis: "Art. 159 (Depósito Final), Art. 162 (Requisitos para Outorga), Art. 163 (Documentação para Expedição)", documentation: "Requerimento padrão, Ata da defesa, Cópia do diploma anterior, Documentos pessoais, Comprovante de depósito, Declaração de quitação da biblioteca, Declaração e histórico de conclusão.", deadlines: "Prazo para Depósito: 30 dias após a defesa (prorrogável por mais 15). A expedição do diploma é de responsabilidade da PRPGP." },
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Propriedade Intelectual", question: "Quem é o dono da minha pesquisa? Posso pedir sigilo?", answer: "Os resultados da pesquisa são de propriedade da UEPB, mas os direitos autorais são resguardados. Sim, você pode e deve solicitar sigilo se planeja publicar ou patentear.", details: [{ icon: '💡', category: 'Categoria Principal: Propriedade Intelectual', points: ["Propriedade: Os resultados são da UEPB, mas a divulgação deve sempre mencionar a universidade, o orientador e o discente.", "Sigilo: Você tem o direito de solicitar um prazo de sigilo de até 1 ano para a divulgação do seu trabalho no repositório.", "Processo: A solicitação de sigilo é feita no momento do depósito final do trabalho."] }], legalBasis: "Art. 187 (Divulgação e Sigilo), Art. 188 (Propriedade dos Resultados)", documentation: "Formulário de autorização de depósito, com a opção de embargo/sigilo marcada.", deadlines: "Prazo de Sigilo: Até 1 ano, podendo ser ampliado. A solicitação é feita no ato do depósito." },
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Regras de Transição", question: "Como funcionam as regras de transição para o novo regimento?", answer: "Para discentes que ingressaram até o segundo período letivo de 2023, aplicam-se as disposições do regimento anterior. Esta nova resolução vale para os ingressantes a partir de sua publicação.", details: [{ icon: '📜', category: 'Categoria Principal: Normas Aplicáveis', points: ["Marco Temporal: A data de ingresso no curso define qual regimento se aplica ao aluno.", "Regra Anterior: Alunos ingressantes até 2023.2 seguem o regimento antigo.", "Regra Nova: Alunos ingressantes após a publicação desta resolução seguem as novas regras."] }], legalBasis: "Art. 189", documentation: "Não se aplica documentação específica, a regra é aplicada automaticamente pela secretaria.", deadlines: "A regra de transição é permanente para as turmas especificadas." },
  {
    topic: "PRAZOS E SITUAÇÕES ESPECIAIS",
    subtopic: "Trancamento Geral e Licença",
    question: "Posso trancar o curso por um tempo?",
    answer: "Sim, é possível solicitar a 'Interrupção de Estudos' (trancamento geral) por motivo de doença comprovada ou licença maternidade. O período de trancamento não é contabilizado no tempo total para a conclusão do curso.",
    keywords: ["trancamento", "interrupção", "licença maternidade", "doença", "afastamento", "pausa", "suspender", "gestante", "saúde", "atestado médico"],
    details: [{
        icon: '⏸️',
        category: 'Categoria Principal: Interrupção de Estudos',
        points: [
            "Motivos Aceitos: Viagem de trabalho, doença comprovada ou licença maternidade.",
            "Prazos de Trancamento: Mestrado (1 período letivo), Doutorado (até 2 períodos letivos).",
            "Efeito: O período trancado não é contado no tempo total do curso.",
            "Bolsa: A bolsa é suspensa durante a interrupção, exceto para o caso de licença maternidade.",
            "Licença Maternidade: A pós-graduanda tem direito a 180 dias de licença, que não suspendem a bolsa e não contam no prazo do curso."
        ]
    }],
    legalBasis: "Art. 107 da Resolução/UEPB/CONSEPE/008/2023",
    documentation: "Requerimento formal com justificativa comprovada (atestado médico, etc.), parecer do orientador e aprovação do Colegiado.",
    deadlines: "A solicitação deve ser feita antes ou durante o período a ser trancado."
},
{
    topic: "SITUAÇÕES PROBLEMÁTICAS",
    subtopic: "Desligamento",
    question: "Em quais situações um aluno pode ser desligado do programa?",
    answer: "O desligamento é o encerramento do vínculo do aluno com o programa e ocorre automaticamente em casos de desempenho acadêmico insuficiente, descumprimento de prazos ou infrações graves, como plágio.",
    keywords: ["desligamento", "jubilamento", "expulsão", "reprovação", "prazo estourado", "abandono", "plágio", "CRE baixo", "perder a vaga"],
    details: [{
        icon: '❌',
        category: 'Categoria Principal: Causas de Desligamento',
        points: [
            "Reprovar 2 vezes na mesma disciplina obrigatória.",
            "Não ser aprovado nos exames de proficiência dentro do prazo.",
            "Não efetuar a matrícula semestral no prazo.",
            "Ser reprovado 2 vezes no exame de qualificação ou pré-banca.",
            "Esgotar o prazo máximo para a conclusão do curso, incluindo prorrogações.",
            "Ter o Coeficiente de Rendimento Escolar (CRE) inferior a 7,0.",
            "Ser reprovado na defesa final da dissertação ou tese.",
            "Comprovação de plágio em qualquer trabalho acadêmico."
        ]
    }],
    legalBasis: "Art. 110 e Art. 111 da Resolução/UEPB/CONSEPE/008/2023",
    documentation: "O processo é administrativo, iniciado pela Coordenação, garantindo ao discente o direito de ampla defesa e recurso ao Colegiado.",
    deadlines: "O desligamento é efetivado após a notificação oficial ou a publicação da decisão do Colegiado."
},
  {
    topic: "PRAZOS E SITUAÇÕES ESPECIAIS",
    subtopic: "Trancamento Geral e Licença",
    question: "Como funciona a licença-maternidade na pós-graduação?",
    answer: "A pós-graduanda tem direito a 180 dias de licença-maternidade. Este período não é descontado do prazo total para a conclusão do curso e, para alunas bolsistas, a bolsa não é suspensa durante a licença.",
    keywords: ["licença maternidade", "mãe", "gestante", "parto", "adoção", "afastamento", "bebê", "filho", "bolsa", "prazo"],
    details: [{
        icon: '🤱',
        category: 'Categoria Principal: Direitos da Pós-Graduanda',
        points: [
            "Duração da Licença: 180 dias.",
            "Contagem de Prazo: O período da licença NÃO é contabilizado no prazo máximo para a defesa da dissertação ou tese.",
            "Bolsa de Estudos: A bolsa de estudos é mantida integralmente durante a licença, sendo uma exceção à regra de suspensão por afastamento.",
            "Exercícios Domiciliares: A aluna gestante também tem direito a um regime de exercícios domiciliares a partir do oitavo mês de gestação, com duração de 4 meses."
        ]
    }],
    legalBasis: "Art. 41 (§ 2º), Art. 107 (§§ 6º e 7º) e Art. 108 (I) da Resolução/UEPB/CONSEPE/008/2023",
    documentation: "Atestado médico ou certidão de nascimento para formalizar o pedido junto à coordenação do programa.",
    deadlines: "A solicitação deve ser feita formalmente à coordenação do programa para que os prazos e a manutenção da bolsa sejam garantidos."
},
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Passagem Direta Mestrado-Doutorado", question: "É possível passar do mestrado para o doutorado diretamente (fast track)?", answer: "Sim, os programas podem prever a passagem de alunos do mestrado para o doutorado sem a necessidade de um novo processo seletivo público, contanto que critérios de excelência sejam atendidos.", details: [{ icon: '🚀', category: 'Categoria Principal: Mobilidade Acadêmica Avançada', points: ["Condição: O regimento do programa deve prever e detalhar essa possibilidade.", "Critérios: O aluno deve demonstrar desempenho excepcional, produção acadêmica qualificada e ter um plano de trabalho consistente para o doutorado.", "Avaliação: A passagem depende de uma avaliação rigorosa por uma comissão designada pelo Colegiado."] }], legalBasis: "Art. 104", documentation: "Requerimento formal, histórico escolar, currículo Lattes atualizado, produção científica, plano de trabalho para o doutorado, carta de recomendação do orientador.", deadlines: "A solicitação deve ser feita em um prazo definido pelo regimento do programa, geralmente após a qualificação do mestrado." },
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Deveres do Discente", question: "Quais são os principais deveres do aluno de pós-graduação?", answer: "Além do respeito às normas da UEPB, o aluno deve cumprir o plano de estudos, manter o orientador informado, participar das atividades, realizar o estágio de docência e submeter projetos ao Comitê de Ética quando necessário.", details: [{ icon: '📋', category: 'Categoria Principal: Responsabilidades Acadêmicas', points: ["Zelar pelo nome da instituição e cumprir o regimento.", "Manter seus dados cadastrais e curriculares atualizados.", "Dedicar-se às atividades do curso e cumprir os prazos.", "Cumprir o Estágio de Docência (obrigatório para bolsistas).", "Observar as diretrizes do Comitê de Ética em Pesquisa."] }], legalBasis: "Art. 74", documentation: "Comprovantes de submissão ao Comitê de Ética, relatórios de estágio de docência, etc., conforme exigido pelo programa.", deadlines: "Os deveres devem ser cumpridos ao longo de todo o curso." },
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Representação Discente", question: "Como funciona a representação dos alunos no Colegiado?", answer: "Os alunos (discentes) têm direito a uma representação no Colegiado do programa, com direito a voz e voto, garantindo sua participação nas decisões. O mandato é de 1 ano, permitida uma recondução.", details: [{ icon: '🗣️', category: 'Categoria Principal: Governança e Participação', points: ["Composição: O Colegiado inclui representantes dos alunos, eleitos por seus pares.", "Mandato: O mandato do representante discente é de 1 (um) ano.", "Recondução: É permitida uma recondução para um segundo mandato.", "Voz e Voto: Os representantes participam ativamente das reuniões e deliberações."] }], legalBasis: "Art. 31, inciso III e §3º", documentation: "A eleição é organizada pelos próprios alunos e formalizada junto à coordenação do programa.", deadlines: "O mandato é de 1 ano, com eleições periódicas para a escolha dos representantes." },
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Deveres do Discente", question: "Quais são os principais deveres do aluno de pós-graduação?", answer: "Além do respeito às normas da UEPB, o aluno deve cumprir o plano de estudos, manter o orientador informado, participar das atividades, realizar o estágio de docência e submeter projetos ao Comitê de Ética quando necessário.", details: [{ icon: '📋', category: 'Categoria Principal: Responsabilidades Acadêmicas', points: ["Zelar pelo nome da instituição e cumprir o regimento.", "Manter seus dados cadastrais e curriculares atualizados.", "Dedicar-se às atividades do curso e cumprir os prazos.", "Cumprir o Estágio de Docência (obrigatório para bolsistas).", "Observar as diretrizes do Comitê de Ética em Pesquisa."] }], legalBasis: "Art. 74", documentation: "Comprovantes de submissão ao Comitê de Ética, relatórios de estágio de docência, etc., conforme exigido pelo programa.", deadlines: "Os deveres devem ser cumpridos ao longo de todo o curso." },
    { topic: "REQUISITOS DE CONCLUSÃO", subtopic: "Critérios de Finalização", question: "Quais são os requisitos obrigatórios para concluir o Mestrado em Ciências Farmacêuticas?", answer: "Para concluir o Mestrado no PPGCF/UEPB, o discente deve atender a critérios específicos de prazo, proficiência em idioma e produção científica, variando conforme sua situação de bolsa.", details: [{ icon: '🎯', category: 'Categoria Principal: Requisitos de Conclusão', points: ["Prazo: Duração máxima de 24 meses, com possível prorrogação de até 6 meses mediante aprovação do colegiado.", "Proficiência: Aprovação em Exame de Proficiência em Língua Inglesa de instituição pública reconhecida.", "Produção Científica (sem bolsa): Mínimo de 1 produto submetido (artigo Qualis A, patente ou capítulo de livro).", "Produção Científica (com bolsa): Mínimo de 2 produtos submetidos ou 1 aceito (artigo Qualis A, patente ou capítulo de livro).", "Observação: O discente deve ser primeiro autor dos artigos submetidos."] }], legalBasis: "Regimento Interno do PPGCF", documentation: "Comprovante de proficiência, comprovantes de submissão/aceite de produtos científicos.", deadlines: "Prazo máximo de 24 meses para conclusão, com possibilidade de prorrogação de 6 meses." }
];

// Quick access cards data
const quickAccessCards = [
    { icon: 'fas fa-user-plus', title: 'Ingresso', description: 'Processo seletivo, matrícula e admissão', topic: 'INGRESSO E ADMISSÃO' },
    { icon: 'fas fa-graduation-cap', title: 'Vida Acadêmica', description: 'Créditos, disciplinas e avaliações', topic: 'VIDA ACADÊMICA' },
    { icon: 'fas fa-money-bill-wave', title: 'Bolsas', description: 'Auxílios financeiros e dedicação', topic: 'QUESTÕES FINANCEIRAS' },
    { icon: 'fas fa-chalkboard-teacher', title: 'Orientação', description: 'Orientadores e relacionamento', topic: 'ORIENTAÇÃO' },
    { icon: 'fas fa-certificate', title: 'Defesa', description: 'Qualificação, defesa e diplomação', topic: 'DEFESA E DIPLOMAÇÃO' },
    { icon: 'fas fa-balance-scale', title: 'Direitos e Governança', description: 'Estrutura, funcionamento e direitos', topic: 'DIREITOS E GOVERNANÇA' },
    { icon: 'fas fa-clock', title: 'Prazos e Situações Especiais', description: 'Prazos do curso e situações especiais', topic: 'PRAZOS E SITUAÇÕES ESPECIAIS' },
    { icon: 'fas fa-exclamation-triangle', title: 'Situações Problemáticas', description: 'Desligamento e problemas acadêmicos', topic: 'SITUAÇÕES PROBLEMÁTICAS' },
    { icon: 'fas fa-users', title: 'Corpo Docente', description: 'Professores, orientadores e credenciamento', topic: 'CORPO DOCENTE' },
    { icon: 'fas fa-plane-departure', title: 'Apoio a Eventos', description: 'Auxílio para participação em congressos', topic: 'APOIO A EVENTOS CIENTÍFICOS' },
    { icon: 'fas fa-check-circle', title: 'Requisitos de Conclusão', description: 'Critérios para finalizar o curso', topic: 'REQUISITOS DE CONCLUSÃO' },
    { icon: 'fas fa-hands-helping', title: 'Professor Voluntário', description: 'Regras para atuação voluntária na UEPB', topic: 'PROFESSOR VOLUNTÁRIO' },
    { icon: 'fas fa-microscope', title: 'Pós-Doutorado', description: 'Estágio, regras e atividades', topic: 'PÓS-DOUTORADO' },
    { icon: 'fas fa-info-circle', title: 'Sobre esta Versão', description: 'Informações sobre atualizações e melhorias', topic: 'SOBRE' }
];

// Topic icons
const topicIcons = {
    "INGRESSO E ADMISSÃO": "fas fa-door-open",
    "ESTRUTURA E GOVERNANÇA": "fas fa-building",
    "CORPO DOCENTE": "fas fa-users",
    "QUESTÕES FINANCEIRAS": "fas fa-money-bill-wave",
    "VIDA ACADÊMICA": "fas fa-graduation-cap",
    "PRAZOS E SITUAÇÕES ESPECIAIS": "fas fa-clock",
    "ORIENTAÇÃO": "fas fa-chalkboard-teacher",
    "DEFESA E DIPLOMAÇÃO": "fas fa-certificate",
    "SITUAÇÕES PROBLEMÁTICAS": "fas fa-exclamation-triangle",
    "DIREITOS E GOVERNANÇA": "fas fa-balance-scale",
    "APOIO A EVENTOS CIENTÍFICOS": "fas fa-plane-departure",
    "PROFESSOR VOLUNTÁRIO": "fas fa-hands-helping",
    "PÓS-DOUTORADO": "fas fa-microscope",
    "REQUISITOS DE CONCLUSÃO": "fas fa-check-circle"
};

// FAQ Data (English Version)
const faqData_en = [
    {
        topic: "SUPPORT FOR SCIENTIFIC EVENTS",
        subtopic: "General Rules",
        question: "Does UEPB offer financial aid to present papers at conferences?",
        answer: "Yes, UEPB offers financial incentives for permanent faculty members and visiting professors to participate in national or international scientific or technological events with a paper presentation.",
        details: [{
            icon: '✈️',
            category: 'Main Category: Incentive for Scientific Production',
            points: [
                "The support is intended to cover the costs of participating in events to disseminate research.",
                "The program aims to strengthen the university's Graduate and Research policies."
            ]
        }],
        legalBasis: "Art. 1 of Resolution/UEPB/CONSEPE/079/2015",
        documentation: "Application form, abstract of the paper, acceptance letter, event folder, among others.",
        deadlines: "The request must be made at least 60 days before the event."
    },
    {
        topic: "SUPPORT FOR SCIENTIFIC EVENTS",
        subtopic: "General Rules",
        question: "What type of aid can I request and who is eligible?",
        answer: "Active permanent and visiting professors can request EITHER airfare (economy class) OR up to 4 daily allowances. It is not permitted to request both. Professors on leave from their activities are not eligible for the aid.",
        details: [{
            icon: '💰',
            category: 'Main Category: Types of Aid',
            points: [
                "The applicant must choose between airfare OR daily allowances.",
                "Airfare is always in economy class, seeking the best cost-benefit.",
                "The limit is 4 daily allowances, according to the event's duration.",
                "Only permanent or visiting faculty members can apply."
            ]
        }],
        legalBasis: "Art. 2 and Art. 5 of Resolution/UEPB/CONSEPE/079/2015",
        documentation: "Specific application form for airfare or daily allowances.",
        deadlines: "The request must be made at least 60 days in advance."
    },
    {
        topic: "SUPPORT FOR SCIENTIFIC EVENTS",
        subtopic: "General Rules",
        question: "What are the prerequisites to receive the aid?",
        answer: "To have the request approved, the paper to be presented must have a UEPB student as the first author, and the applying professor must have recent intellectual production.",
        details: [{
            icon: '📋',
            category: 'Main Category: Eligibility Criteria',
            points: [
                "It is mandatory to have a paper accepted at the event, preferably for oral presentation.",
                "For national events, the first author must be an undergraduate, scientific initiation, or lato sensu graduate student from UEPB.",
                "For international events, the first author must be a stricto sensu graduate student from UEPB.",
                "The applying professor must have published at least one article, book, or book chapter in the last 3 years."
            ]
        }],
        legalBasis: "Art. 3 of Resolution/UEPB/CONSEPE/079/2015",
        documentation: "Copy of the accepted paper, proof of recent intellectual production, and a document proving the student's status as the first author.",
        deadlines: "The paper acceptance document can be sent up to 15 days before the event."
    },
    {
        topic: "SUPPORT FOR SCIENTIFIC EVENTS",
        subtopic: "General Rules",
        question: "How often can I apply for this aid?",
        answer: "There is a limit on applications to ensure that more faculty members can benefit. One aid for a national conference is allowed per year, and one aid for an international conference is allowed every two years.",
        details: [{
            icon: '🗓️',
            category: 'Main Category: Application Limits',
            points: [
                "Aid for a national event: 1 per year.",
                "Aid for an international event: 1 every 2 years."
            ]
        }],
        legalBasis: "Art. 4 of Resolution/UEPB/CONSEPE/079/2015",
        documentation: "N/A",
        deadlines: "Control is based on the professor's previous applications."
    },
    {
        topic: "SUPPORT FOR SCIENTIFIC EVENTS",
        subtopic: "General Rules",
        question: "How and when should I submit the expense report?",
        answer: "After the event, the beneficiary professor has 15 days to prove their participation and the presentation of the paper to the Dean's Office for Graduate Studies and Research (PRPGP).",
        details: [{
            icon: '🧾',
            category: 'Main Category: Expense Reporting',
            points: [
                "Submit the certificate of participation in the conference.",
                "Submit proof of the paper presentation.",
                "Hand in the travel tickets (boarding pass stubs), if airfare was provided."
            ]
        }],
        legalBasis: "Art. 8 of Resolution/UEPB/CONSEPE/079/2015",
        documentation: "Certificates and travel tickets.",
        deadlines: "The deadline for submitting documentation is 15 days after the end of the event."
    },
    {
        topic: "POSTDOCTORAL RESEARCH",
        subtopic: "General Rules",
        question: "What is a Postdoctoral Fellowship and who can do it at UEPB?",
        answer: "It is a research fellowship undertaken by professionals with a doctoral degree who are not part of UEPB's permanent staff. The goal is to develop a research project under the supervision of a faculty member from a university graduate program.",
        details: [{
            icon: '👨‍🔬',
            category: 'Main Category: Definition and Audience',
            points: [
                "Aimed at external researchers with a Ph.D.",
                "Activities are carried out on a full-time or part-time basis.",
                "The fellowship is always linked to a research project and a supervisor accredited in a graduate program."
            ]
        }],
        legalBasis: "Art. 1, § 1 of Resolution/UEPB/CONSEPE/008/2022",
        documentation: "Acceptance letter from the supervisor, copy of the doctoral diploma, Lattes CV, and work plan.",
        deadlines: "The minimum duration of the fellowship is 3 months."
    },
    {
        topic: "POSTDOCTORAL RESEARCH",
        subtopic: "General Rules",
        question: "Besides research, what other activities can a postdoctoral fellow perform?",
        answer: "A postdoctoral fellow can engage in various activities, including teaching in undergraduate and graduate courses, supervising scientific initiation students, and even co-supervising master's and doctoral students, at the discretion of the program's board.",
        details: [{
            icon: '📚',
            category: 'Main Category: Permitted Activities',
            points: [
                "Teach in undergraduate and graduate courses, always under the responsibility of a permanent faculty member.",
                "Supervise Scientific Initiation students.",
                "Act as a co-supervisor for dissertations and theses, if approved by the board.",
                "Can become a full supervisor, provided they meet the requirements of CAPES and the program."
            ]
        }],
        legalBasis: "Art. 1, §§ 2, 4, 5, and 6 of Resolution/UEPB/CONSEPE/008/2022",
        documentation: "All activities must be outlined in the approved Work Plan.",
        deadlines: "Co-supervision and supervision depend on specific approval from the program's board."
    },
    {
        topic: "POSTDOCTORAL RESEARCH",
        subtopic: "General Rules",
        question: "How does the Postdoctoral application process work?",
        answer: "The candidate must submit an application to the Board of the desired Graduate Program, containing the necessary documentation, including an acceptance letter from the future supervisor and a detailed work plan.",
        details: [{
            icon: '📝',
            category: 'Main Category: Application Documentation',
            points: [
                "Acceptance letter from a supervising professor in the program.",
                "Copy of the doctoral diploma.",
                "Curriculum Vitae (Lattes format).",
                "Detailed work plan with research project, timeline, and source of funding.",
                "Declaration of leave from the home institution (if there is an employment relationship and it is a full-time dedication)."
            ]
        }],
        legalBasis: "Art. 3 of Resolution/UEPB/CONSEPE/008/2022",
        documentation: "The complete documentation must be submitted to the secretary of the desired program.",
        deadlines: "The process can be on a continuous basis or through specific calls for applications, depending on the program."
    },
    {
        topic: "POSTDOCTORAL RESEARCH",
        subtopic: "General Rules",
        question: "What is the duration of the fellowship and how does renewal work?",
        answer: "The fellowship has an initial duration of up to 12 months and can be renewed annually up to a maximum limit of 60 months (5 years). The minimum duration to be considered a postdoctoral fellowship is 3 months.",
        details: [{
            icon: '⏳',
            category: 'Main Category: Duration and Extension',
            points: [
                "Minimum duration: 3 months.",
                "Standard initial duration: Up to 12 months.",
                "Maximum total duration: 60 months (5 years), subject to annual renewals.",
                "Renewal depends on the approval of an activity report by the program's board."
            ]
        }],
        legalBasis: "Art. 4, §§ 3 and 4 of Resolution/UEPB/CONSEPE/008/2022",
        documentation: "To renew, an annual activity report with the supervisor's assessment must be submitted.",
        deadlines: "The report must be submitted at the end of each fellowship year for renewal evaluation."
    },
    {
        topic: "POSTDOCTORAL RESEARCH",
        subtopic: "General Rules",
        question: "Does the postdoctoral fellowship create an employment relationship or grant a title?",
        answer: "No. Participation in the postdoctoral fellowship does not create any employment or functional relationship with UEPB. As an academic fellowship, it does not confer a new title on the researcher, but rather a certificate of completion.",
        details: [{
            icon: '📜',
            category: 'Main Category: Nature of the Relationship',
            points: [
                "There is no employment or functional relationship.",
                "The activities are voluntary unless the researcher is a scholarship holder.",
                "It does not confer a new degree or title.",
                "At the end, the researcher receives a certificate issued by the Dean's Office for Graduate Studies and Research (PRPGP)."
            ]
        }],
        legalBasis: "Art. 8 and Art. 9 of Resolution/UEPB/CONSEPE/008/2022",
        documentation: "The Certificate of Completion is issued by the PRPGP after the approval of the final report.",
        deadlines: "The final report must be approved by the program's board at the end of the fellowship."
    },
    {
        topic: "VOLUNTEER PROFESSOR",
        subtopic: "General Rules",
        question: "What is the Volunteer Professor and Technical Staff Program (PPTAV)?",
        answer: "It is a program that allows professors and administrative staff, especially those who are retired or have no formal ties to UEPB, to continue contributing to the university in cultural, educational, and scientific activities. The service is voluntary and does not create an employment relationship or an obligation for remuneration.",
        details: [{
            icon: '🤝',
            category: 'Main Category: Nature of the Relationship',
            points: [
                "The program is governed by Federal Law No. 9,608/1998.",
                "Participation is formalized through a Term of Adhesion.",
                "It does not generate employment ties, salary, or labor and social security obligations for UEPB.",
                "It aims to prevent discontinuity in teaching, research, and extension activities."
            ]
        }],
        legalBasis: "Art. 1 and Art. 2 of Resolution/UEPB/CONSUNI/0208/2017",
        documentation: "Term of Adhesion signed between the volunteer and UEPB.",
        deadlines: "The duration of the relationship is a maximum of 1 year, renewable."
    },
    {
        topic: "VOLUNTEER PROFESSOR",
        subtopic: "General Rules",
        question: "Who can apply to be a Volunteer Professor?",
        answer: "Retired professors (from UEPB or other institutions) or professionals without a formal tie to UEPB who have recognized expertise in their field can apply. To work in stricto sensu graduate programs, a Doctoral degree is required.",
        details: [{
            icon: '🧑‍🏫',
            category: 'Main Category: Adhesion Requirements',
            points: [
                "Be a retired professor or have no formal tie with UEPB.",
                "Have recognized expertise in the field of activity.",
                "Have a Work Plan approved by the relevant course or program bodies.",
                "For Graduate Studies (Master's/Doctorate), a Doctoral degree is mandatory."
            ]
        }],
        legalBasis: "Art. 3 and §2 of Resolution/UEPB/CONSUNI/0208/2017",
        documentation: "Formal application, Work Plan, and Curriculum Vitae (preferably Lattes).",
        deadlines: "The application process can be opened at any time, depending on the acceptance of the interested unit."
    },
    {
        topic: "VOLUNTEER PROFESSOR",
        subtopic: "General Rules",
        question: "What activities can a Volunteer Professor undertake?",
        answer: "A Volunteer Professor can perform most academic activities, such as teaching, research, participating in extension projects, supervising students, and serving on examination committees.",
        details: [{
            icon: '📚',
            category: 'Main Category: Permitted Activities',
            points: [
                "Teaching activities in undergraduate and graduate studies.",
                "Development of research and extension projects.",
                "Supervision of undergraduate final projects, master's dissertations, and doctoral theses.",
                "Participation in committees for monographs, dissertations, theses, and public selections.",
                "Participation in board meetings, with the right to speak but not to vote."
            ]
        }],
        legalBasis: "Art. 4 of Resolution/UEPB/CONSUNI/0208/2017",
        documentation: "The activities must be detailed and approved in the Work Plan.",
        deadlines: "Activities must be carried out within the validity period of the Term of Adhesion."
    },
    {
        topic: "VOLUNTEER PROFESSOR",
        subtopic: "General Rules",
        question: "What are the rights and limitations of a Volunteer Professor?",
        answer: "The volunteer has the right to use UEPB's infrastructure (libraries, laboratories) and institutional affiliation. However, they do not have administrative rights, such as voting or being elected to leadership or representative positions.",
        details: [{
            icon: '⚖️',
            category: 'Main Category: Rights and Prohibitions',
            points: [
                "Right to use the title 'Volunteer Professor of UEPB'.",
                "Right to access spaces like laboratories and libraries.",
                "Right to an institutional email.",
                "Limitation: Cannot vote or be elected for administrative positions (Head of Department, Coordinator, etc.).",
                "Limitation: Participates in board meetings with the right to speak but not to vote."
            ]
        }],
        legalBasis: "Art. 4 (§1 and §2) and Art. 12 of Resolution/UEPB/CONSUNI/0208/2017",
        documentation: "The rights and duties are formalized in the Term of Adhesion.",
        deadlines: "The rights are valid during the term of the Term of Adhesion."
    },
    {
        topic: "VOLUNTEER PROFESSOR",
        subtopic: "General Rules",
        question: "What is the process to become a Volunteer Professor?",
        answer: "The interested party must formalize a request with the interested unit (Department or Graduate Program), presenting a Work Plan and their curriculum. The request will be analyzed and voted on by the unit's board.",
        details: [{
            icon: '📝',
            category: 'Main Category: Adhesion Process',
            points: [
                "1. Prepare an application and a Work Plan detailing the activities, period, and weekly workload.",
                "2. Submit the application, plan, and curriculum to the board of the Department or Program.",
                "3. Await the unit's opinion, which has 30 days to respond.",
                "4. If approved, sign the Term of Adhesion with UEPB, which will be registered with PROGEP."
            ]
        }],
        legalBasis: "Art. 6, 7, and 8 of Resolution/UEPB/CONSUNI/0208/2017",
        documentation: "Application, Work Plan, and Curriculum Vitae.",
        deadlines: "The unit's board has 30 days to issue an opinion on the request."
    },
    {
        topic: "VOLUNTEER PROFESSOR",
        subtopic: "General Rules",
        question: "What is the duration of the volunteer relationship and how does renewal work?",
        answer: "The Term of Adhesion has a maximum duration of 1 (one) year. It is possible to request a renewal for the same period, following the same procedures as the initial request and including a report of the activities already carried out.",
        details: [{
            icon: '🔄',
            category: 'Main Category: Duration and Renewal',
            points: [
                "Initial duration: Maximum of 1 year.",
                "Renewal: Permitted for another 1 year.",
                "Renewal Process: Requires the submission of an activity report and a new performance evaluation.",
                "The renewal request undergoes the same approval process by the unit's board."
            ]
        }],
        legalBasis: "Art. 9 of Resolution/UEPB/CONSUNI/0208/2017",
        documentation: "For renewal, an activity report and a new request are required.",
        deadlines: "The renewal request must be made before the end of the current term."
    },
    {
        topic: "ACADEMIC LIFE",
        subtopic: "Teaching Internship",
        question: "What is the objective of the Teaching Internship?",
        answer: "The Teaching Internship aims to prepare graduate students for a teaching career by creating opportunities for improvement through participation in undergraduate teaching activities.",
        details: [{
            icon: '🎯',
            category: 'Main Category: Teacher Training',
            points: [
                "To train graduate students for teaching in higher education.",
                "To promote integration between graduate programs and undergraduate courses.",
                "To improve the quality of teaching at both levels (undergraduate and graduate)."
            ]
        }],
        legalBasis: "Art. 1 of Resolution/UEPB/CONSEPE/032/2011",
        documentation: "Work Plan and Activity Report.",
        deadlines: "The internship must be carried out starting from the second semester of enrollment in the course."
    },
    {
        topic: "ACADEMIC LIFE",
        subtopic: "Teaching Internship",
        question: "Is the Teaching Internship mandatory for everyone?",
        answer: "Yes, the internship is a mandatory activity for all master's and doctoral students. However, students who are already higher education professors can request an exemption from the activity.",
        details: [{
            icon: '🧑‍🏫',
            category: 'Main Category: Obligation and Exemptions',
            points: [
                "The requirement aims to integrate the graduate student's training, according to CAPES norms.",
                "Exemption is not automatic and must be formally requested.",
                "The final decision on the exemption rests with the Program's Board."
            ]
        }],
        legalBasis: "Art. 2 and Sole Paragraph of Resolution/UEPB/CONSEPE/032/2011",
        documentation: "For exemption, proof of teaching experience in Higher Education is required.",
        deadlines: "The exemption request must be made to the Program's Board."
    },
    {
        topic: "ACADEMIC LIFE",
        subtopic: "Teaching Internship",
        question: "What is the duration and workload of the internship?",
        answer: "The duration varies between master's and doctoral degrees, with a limited weekly workload to not interfere with the graduate student's other activities.",
        details: [{
            icon: '⏳',
            category: 'Main Category: Duration and Workload',
            points: [
                "Master's: Minimum duration of 1 semester and maximum of 2 semesters.",
                "Doctorate: Minimum duration of 2 semesters and maximum of 3 semesters.",
                "Weekly Workload: Maximum of 4 hours per week."
            ]
        }],
        legalBasis: "Art. 3 and Art. 4 of Resolution/UEPB/CONSEPE/032/2011",
        documentation: "The Work Plan will detail the distribution of the workload.",
        deadlines: "The workload must be completed during the academic semester in which the student is enrolled in the activity."
    },
    {
        topic: "ACADEMIC LIFE",
        subtopic: "Teaching Internship",
        question: "What activities can I perform during the Teaching Internship?",
        answer: "The internship allows participation in various academic activities, with teaching a percentage of theoretical or practical classes being one of the main ones.",
        details: [{
            icon: '📚',
            category: 'Main Category: Activities Performed',
            points: [
                "Participate in the development of the syllabus and lesson plans.",
                "Prepare and teach theoretical and/or practical classes (minimum of 20% and maximum of 30% of the course's workload).",
                "Assist in the evaluation process of undergraduate students.",
                "Supervise Scientific Initiation and Final Project students.",
                "Present seminars or lectures."
            ]
        }],
        legalBasis: "Art. 5 of Resolution/UEPB/CONSEPE/032/2011",
        documentation: "The activities must be detailed in the Work Plan.",
        deadlines: "The activities must follow the schedule approved in the Work Plan."
    },
    {
        topic: "ACADEMIC LIFE",
        subtopic: "Teaching Internship",
        question: "How do enrollment and credit attribution for the internship work?",
        answer: "The student enrolls in a specific Teaching Internship course. The activity generates credits that are additional to the regular curriculum of the program.",
        details: [{
            icon: '📊',
            category: 'Main Category: Enrollment and Credits',
            points: [
                "Master's: Up to 2 credits (30 hours).",
                "Doctorate: Up to 4 credits (60 hours).",
                "Additional Credits: Do not replace the mandatory or elective credits of the program.",
                "Enrollment: Carried out from the second semester of the course."
            ]
        }],
        legalBasis: "Art. 6, §1, §2, and Art. 7 of Resolution/UEPB/CONSEPE/032/2011",
        documentation: "Enrollment is formalized at the Program's Secretariat, with the submission of the Work Plan.",
        deadlines: "Enrollment must be done in the academic period when the internship will be carried out."
    },
    {
        topic: "ACADEMIC LIFE",
        subtopic: "Teaching Internship",
        question: "Do I need a Work Plan? What should it contain?",
        answer: "Yes, a detailed Work Plan is mandatory. It must be prepared together with your supervisor and approved by the Program's Board and the responsible Department.",
        details: [{
            icon: '📋',
            category: 'Main Category: Internship Planning',
            points: [
                "Content: Justification, objectives, weekly workload, activity schedule, and references.",
                "Signatures: Must be signed by you (the student), your supervisor, and the course professor (if different from the supervisor).",
                "Approval: The plan must be approved before the start of activities."
            ]
        }],
        legalBasis: "Art. 8 of Resolution/UEPB/CONSEPE/032/2011",
        documentation: "The Work Plan must be submitted to the Program's Secretariat upon enrollment in the internship discipline.",
        deadlines: "The plan must be submitted before the beginning of the internship's academic period."
    },
    {
        topic: "ACADEMIC LIFE",
        subtopic: "Teaching Internship",
        question: "How will I be evaluated in the Teaching Internship?",
        answer: "The evaluation is based on a final report that you prepare upon completing the activities. The report is evaluated by your supervisor and subsequently by the Program's Board.",
        details: [{
            icon: '✅',
            category: 'Main Category: Evaluation and Completion',
            points: [
                "Partial Report: A report on classroom activities must be submitted to the course professor within 15 days of its completion.",
                "Final Report: A complete report, signed by you and your supervisor (with their opinion attached), must be submitted to the Board within 30 days after the end of all activities.",
                "Result: The Board can approve, request additions, or fail the report. In case of failure, a new internship must be undertaken."
            ]
        }],
        legalBasis: "Art. 10, Art. 11, and Art. 12 of Resolution/UEPB/CONSEPE/032/2011",
        documentation: "Teaching Internship Report, according to the program's model or guidelines.",
        deadlines: "Partial Report (15 days after classes end), Final Report (30 days after all activities end)."
    },
    {
        topic: "ENROLLMENT AND ADMISSION",
        subtopic: "Regular Selection Process",
        question: "How does the regular selection process work?",
        answer: "The selection process is the official entry point to the program, governed by a public call for applications that details all rules, dates, and necessary documents.",
        details: [{
            icon: '📝',
            category: 'Main Category: Selection Process',
            points: [
                "Call for Applications: This is the most important document, published at least 30 days in advance. It defines vacancies, criteria, schedule, and documentation.",
                "Application: Usually online, requires filling out forms and submitting scanned documents.",
                "Continuous Flow: The program may opt for a 'continuous flow' model, allowing applications at any time of the year, as per the call."
            ]
        }],
        legalBasis: "Art. 79 (Standardization), Art. 81 (Continuous Flow), Art. 87 (Selection Committee), Art. 88 (Process Validity)",
        documentation: "Application request, Application form, Copy of diploma (or declaration), Academic transcript, Lattes CV, Proof of fee payment.",
        deadlines: "Publication of the Call: Minimum 30 days before applications. Appeals: Deadline defined in the call, with the Board as the first instance."
    },
    {
        topic: "ENROLLMENT AND ADMISSION",
        subtopic: "Institutional Enrollment",
        question: "I was accepted! How do I complete the institutional enrollment?",
        answer: "Institutional enrollment is the act that formalizes your connection with UEPB. Missing the deadline means losing your spot, even if you were accepted.",
        details: [{
            icon: '🔗',
            category: 'Main Category: Academic Link',
            points: [
                "Procedure: Carried out at the program's secretariat, within the period stipulated in the academic calendar.",
                "Condition: It is a prerequisite for the first enrollment in courses.",
                "Prohibition: Simultaneous enrollment in more than one stricto sensu graduate program at UEPB is prohibited."
            ]
        }],
        legalBasis: "Art. 100 (Mandatory Nature and Deadlines), Art. 101 (Prohibition of Simultaneous Enrollment), Art. 102 (Foreign Diplomas), Art. 103 (Semester Enrollment)",
        documentation: "Documents listed in the selection call (diploma, transcript, personal documents, etc.).",
        deadlines: "Deadline defined in the program's academic calendar. Failure to enroll results in automatic loss of the spot (Art. 100, §4)."
    },
    {
        topic: "ENROLLMENT AND ADMISSION",
        subtopic: "Transfer",
        question: "Can I transfer from another master's/doctoral program to PPGCF?",
        answer: "Yes, transferring is possible, but it depends on the availability of spots, the approval of the Board, and meeting specific requirements.",
        details: [{
            icon: '🔄',
            category: 'Main Category: Academic Mobility',
            points: [
                "Requirements: Be a regular student of a program with a CAPES score equal to or higher, have completed at least 6 months, and have the formal acceptance of a PPGCF supervisor.",
                "Process: The request must be approved by the Boards of both programs (origin and destination)."
            ]
        }],
        legalBasis: "Art. 86, §1 (Admission by Transfer), Art. 105 (Minimum Conditions)",
        documentation: "Formal request, Academic transcript from the original institution, Course syllabi, Acceptance letter from the new supervisor, Letter of consent from the original program.",
        deadlines: "The time already spent in the original program is counted towards the maximum duration. The final decision rests with the PPGCF Board."
    },
    {
        topic: "ENROLLMENT AND ADMISSION",
        subtopic: "Re-entry",
        question: "I was dismissed from the program. Can I try to enter again?",
        answer: "Yes, but there is a mandatory waiting period. Re-entry is not automatic and requires participation in a new selection process.",
        details: [{
            icon: '⏳',
            category: 'Main Category: Re-entry',
            points: [
                "Waiting Period: It is necessary to wait a minimum of 12 months after the dismissal date to apply for a new selection process.",
                "New Enrollment: If approved, re-entry is considered a new enrollment, with no automatic transfer of credits."
            ]
        }],
        legalBasis: "Art. 80 (Waiting Period), Art. 112 (Re-entry as New Enrollment)",
        documentation: "The same documentation required in the selection call for new candidates.",
        deadlines: "Minimum waiting period of 12 months. The candidate competes normally in the new selection process."
    },
    {
        topic: "ENROLLMENT AND ADMISSION",
        subtopic: "Special Student",
        question: "What is a 'Special Student' and how does it work?",
        answer: "A Special Student is one who takes individual courses in the program without a regular enrollment. It is a great way to get to know the program or earn credits in advance.",
        details: [{
            icon: '🧑‍🏫',
            category: 'Main Category: Non-Degree Participation',
            points: [
                "Rights: Can attend classes and receive a certificate of completion for the course.",
                "Limitations: Does not have a supervisor, cannot receive a scholarship, and does not have the same rights as a regular student.",
                "Credit Transfer: Credits earned in the last 5 years can be transferred if the student later enrolls as a regular student."
            ]
        }],
        legalBasis: "Art. 75 (Definition), Art. 76 (Acceptance Rules), Arts. 77 and 78 (Possibility for undergraduate students and researchers)",
        documentation: "Usually, an undergraduate diploma, transcript, CV, and a letter of interest.",
        deadlines: "Application according to the academic calendar. Acceptance is approved by the Board."
    },
    {
        topic: "STRUCTURE AND GOVERNANCE",
        subtopic: "Board's Responsibilities",
        question: "What are the main responsibilities of the Board?",
        answer: "The Board is the program's highest deliberative body. It defines and approves all academic, pedagogical, and administrative rules, being the main instance for appealing decisions made by the Coordination.",
        details: [{
            icon: '🏛️',
            category: 'Main Competencies',
            points: [
                "Propose and approve changes to the program's regulations.",
                "Define the number of vacancies and approve selection calls.",
                "Deliberate on credit transfers, transfers, leaves of absence, and dismissals.",
                "Appoint supervisors, co-supervisors, and approve examination committees (panels).",
                "Approve the academic calendar and the course offerings for each term."
            ]
        }],
        legalBasis: "Art. 30, 31, 32",
        documentation: "Minutes of the Board meetings.",
        deadlines: "Decisions are made in regular meetings (at least once a month) or extraordinary ones."
    },
    {
        topic: "STRUCTURE AND GOVERNANCE",
        subtopic: "Coordination's Responsibilities",
        question: "What are the functions of the Program's Coordination?",
        answer: "The Coordination is the executive body that manages the day-to-day operations of the program. It implements the Board's decisions, represents the program, and ensures compliance with all rules and deadlines.",
        details: [{
            icon: '🧑‍💼',
            category: 'Main Functions',
            points: [
                "Preside over the Board meetings and execute its decisions.",
                "Prepare and send reports to CAPES (Sucupira Platform).",
                "Manage the allocation of financial resources (such as PROAP).",
                "Organize the academic calendar and oversee the completion of activities.",
                "Make urgent 'ad referendum' decisions, which must be ratified by the Board at the next meeting."
            ]
        }],
        legalBasis: "Art. 33, 34, 35",
        documentation: "Annual reports, resource application plans, calls for applications.",
        deadlines: "Responsible for meeting the deadlines set by CAPES and UEPB."
    },
    {
        topic: "STRUCTURE AND GOVERNANCE",
        subtopic: "Secretariat's Responsibilities",
        question: "What is the role of the Program's Secretariat?",
        answer: "The Secretariat is the administrative support body that handles bureaucratic and academic control functions. It is the main point of contact for students and faculty for documentary and routine matters.",
        details: [{
            icon: '🗗',
            category: 'Main Tasks',
            points: [
                "Organize and process applications, enrollments, and other requests.",
                "Keep files, records, and academic histories of students and faculty updated.",
                "Provide secretarial support for Board meetings, defenses, and qualification exams.",
                "Manage the flow of correspondence and official program documents."
            ]
        }],
        legalBasis: "Art. 36, 37",
        documentation: "Enrollment processes, academic transcripts, final paper archives.",
        deadlines: "Continuous work to ensure smooth administrative functioning."
    },
    {
        topic: "FACULTY",
        subtopic: "Accreditation and Categories",
        question: "How does a professor become part of the program's faculty?",
        answer: "A professor or researcher with a doctoral degree can be authorized to participate in the program (accredited) in one of three categories: Permanent, Visiting, or Collaborator, after approval by the Board.",
        details: [{
            icon: '🧑‍🏫',
            category: 'Faculty Categories',
            points: [
                "Permanent: The core of the program, with continuous involvement in teaching, research, and supervision.",
                "Visiting: An external professor hired for a fixed term to collaborate with the program.",
                "Collaborator: Participates in a complementary way in projects, classes, or supervisions, without the same ties as a permanent faculty member."
            ]
        }],
        legalBasis: "Art. 43, 44, 45, 46, 49",
        documentation: "Accreditation call, Lattes CV, research project.",
        deadlines: "Accreditation occurs periodically, according to calls published by the program."
    },
    {
        topic: "FACULTY",
        subtopic: "Supervisor's Duties",
        question: "What are my supervisor's main responsibilities?",
        answer: "The supervisor is responsible for guiding the student throughout their academic journey, from planning studies and choosing courses to preparing and defending the final work.",
        details: [{
            icon: '🧭',
            category: 'Main Responsibilities',
            points: [
                "Assist the student in academic planning and enrollment.",
                "Monitor and evaluate the student's performance.",
                "Help in preparing the project and final work.",
                "Propose the dismissal of the student in case of non-compliance with activities.",
                "Suggest names for committees and authorize the defense of the final work."
            ]
        }],
        legalBasis: "Art. 69",
        documentation: "Performance reports, opinions on student requests.",
        deadlines: "Continuous monitoring throughout the student's course."
    },
    {
        topic: "FINANCIAL MATTERS",
        subtopic: "Scholarships",
        question: "How are scholarships awarded?",
        answer: "Scholarships are not automatic and depend on the availability of quotas from funding agencies (like CAPES). Selection is based on academic merit.",
        details: [{
            icon: '💰',
            category: 'Main Category: Funding and Aid',
            points: [
                "Scholarship Committee: Each program has a committee responsible for defining the selection criteria and monitoring scholarship holders.",
                "Selection Criteria: Prioritize academic merit, usually based on the ranking in the selection process.",
                "Renewal: The scholarship is granted for 12 months, renewable annually up to the course limit, subject to good performance."
            ]
        }],
        legalBasis: "Art. 167 (Scholarship Committee), Art. 168 (Requirements), Art. 169 (Renewal)",
        documentation: "Documents proving the absence of a paid employment relationship, commitment term from the funding agency.",
        deadlines: "Selection is carried out by the Scholarship Committee after the results of the admission selection process."
    },
    {
        topic: "FINANCIAL MATTERS",
        subtopic: "Full-Time Dedication",
        question: "Can I work and receive a scholarship at the same time?",
        answer: "No. The scholarship requires full-time dedication to the program's activities.",
        details: [{
            icon: '🚫',
            category: 'Main Category: Prohibitions and Rules',
            points: [
                "Full-Time Dedication: The scholarship holder must be fully dedicated to the course, which prevents accumulating it with paid professional activities.",
                "Exceptions: The funding agency itself may provide for specific exceptions in its regulations.",
                "Consequences: Non-compliance leads to the cancellation of the scholarship and the obligation to reimburse the amounts received."
            ]
        }],
        legalBasis: "Art. 168, items II and IV (Full-Time Dedication Requirement)",
        documentation: "Declaration of non-accumulation of scholarships and absence of employment.",
        deadlines: "The student is responsible for maintaining their full-time dedication status and informing the coordination of any changes."
    },
    {
        topic: "ACADEMIC LIFE",
        subtopic: "Minimum Credits",
        question: "How many credits do I need to complete the course?",
        answer: "The program requires a minimum number of credits in courses, which must be completed within the course's timeframe.",
        details: [{
            icon: '📊',
            category: 'Main Category: Curriculum Structure',
            points: [
                "Master's: Minimum of 18 credits.",
                "Doctorate: Minimum of 27 credits.",
                "Credit Definition: 1 credit = 15h of theoretical class or 30h of practical class.",
                "Note: Dissertation/thesis credits do not count towards this total."
            ]
        }],
        legalBasis: "Art. 115 (Minimum Credit Limits)",
        documentation: "Control is done via the academic transcript.",
        deadlines: "Credits must be completed within the maximum course duration. The student and supervisor are responsible for planning."
    },
    {
        topic: "ACADEMIC LIFE",
        subtopic: "Evaluation and Approval",
        question: "How does evaluation in courses work?",
        answer: "Passing a course depends on a minimum grade and attendance.",
        details: [{
            icon: '✅',
            category: 'Main Category: Academic Performance',
            points: [
                "Minimum Grade: Passing requires a grade of 7.0 or higher (Concept C).",
                "Minimum Attendance: Attendance of at least 75% of classes is mandatory.",
                "GPA (Grade Point Average): Maintaining a GPA above 7.0 is a condition for remaining in the program."
            ]
        }],
        legalBasis: "Art. 125 (Grading System), Art. 126 (Minimum Attendance), Art. 110, item VI (Dismissal for low GPA)",
        documentation: "N/A",
        deadlines: "The professor has up to 30 days after the end of the course to post the grades. Failing the same course twice or having a GPA < 7.0 leads to dismissal."
    },
    {
        topic: "ACADEMIC LIFE",
        subtopic: "Teaching Internship",
        question: "Is the Teaching Internship mandatory?",
        answer: "Yes, the teaching internship is a mandatory academic activity for scholarship holders, aimed at training for higher education teaching. Students who are already professors can request an exemption.",
        details: [{
            icon: '👨‍🏫',
            category: 'Internship Details',
            points: [
                "It is mandatory for scholarship students.",
                "Master's students must complete it for one semester; doctoral students for two semesters.",
                "The activities are supervised by the supervisor and an undergraduate professor.",
                "At the end, the student must prepare a report to obtain the credits."
            ]
        }],
        legalBasis: "Art. 118",
        documentation: "Activity report of the internship.",
        deadlines: "Must be completed within the regular course duration."
    },
    {
        topic: "ACADEMIC LIFE",
        subtopic: "Credit Transfer",
        question: "Can I transfer credits from other graduate courses?",
        answer: "Yes, the Board may accept credits from courses taken in other graduate programs (stricto or lato sensu), provided they were completed in the last 5 years and are relevant to your training.",
        details: [{
            icon: '📚',
            category: 'Rules for Credit Transfer',
            points: [
                "The course must have been completed no more than 5 years ago.",
                "The grade obtained must be 7.0 or higher (or concept C).",
                "The maximum number of credits to be transferred is defined in each program's regulations.",
                "A request with the academic transcript and course syllabi must be submitted."
            ]
        }],
        legalBasis: "Art. 129, Art. 130",
        documentation: "Formal request, academic transcript, and syllabi of the courses taken.",
        deadlines: "The request must be formally submitted to the program's coordination."
    },
    {
        topic: "DEADLINES AND SPECIAL SITUATIONS",
        subtopic: "Course Deadlines",
        question: "What is the maximum time to complete the master's/doctorate?",
        answer: "The regulations establish minimum and maximum deadlines for completing the course, counted from the date of the first enrollment.",
        details: [{
            icon: '⏳',
            category: 'Main Category: Regulatory Deadlines',
            points: [
                "Master's: Minimum of 1 year and maximum of 2 years and 6 months (30 months).",
                "Doctorate: Minimum of 2 years and maximum of 5 years (60 months).",
                "Extension: In exceptional cases, the Board may grant an extension of up to 6 months (master's) or 12 months (doctorate)."
            ]
        }],
        legalBasis: "Art. 113 (Deadlines), Art. 114 (Extension)",
        documentation: "For extension: Formal request, justification, supervisor's opinion, preliminary version of the work, timeline.",
        deadlines: "The extension request must be made BEFORE the regular deadline expires. The decision is up to the Board."
    },
    {
        topic: "SUPERVISION",
        subtopic: "Supervisor Assignment and Change",
        question: "How does the assignment and change of a supervisor work?",
        answer: "Every student is entitled to a supervisor, who is formally appointed by the Board. A change is possible, but it is a process that requires agreement and approval.",
        details: [{
            icon: '🤝',
            category: 'Main Category: Supervisor-Student Relationship',
            points: [
                "Assignment: Appointed by the Board, based on the student's indication and research alignment.",
                "Change by the Student: The student can request a change, with the consent of the current and new supervisor.",
                "Conflict: In case of disagreement, the final decision on the change rests with the Board."
            ]
        }],
        legalBasis: "Art. 65 (Assignment), Art. 66 (Change by Student), Art. 32, item XXI (Board's Authority)",
        documentation: "For change: Formal request, justification, letters of consent/acceptance.",
        deadlines: "The Board has up to 30 days to appoint a new supervisor in case of a vacancy."
    },
    {
        topic: "SUPERVISION",
        subtopic: "Supervisor Assignment and Change",
        question: "Can a supervisor stop supervising me?",
        answer: "Yes, a supervisor can request the Board for the right to step down from supervising a student. This must be done through a formal and detailed justification, based on the student's performance reports.",
        details: [{
            icon: '👋',
            category: 'Stepping Down from Supervision',
            points: [
                "Supervisor's Right: Supervisors have the right to step down from supervision.",
                "Justification: The request must be formal and well-founded.",
                "Approval: The request must be submitted to and approved by the program's Board.",
                "New Supervisor: If approved, the Board will appoint a new supervisor within 30 days."
            ]
        }],
        legalBasis: "Art. 67 (Stepping Down by Supervisor), Art. 68 (Coordination's Guardianship)",
        documentation: "Formal justification from the supervisor.",
        deadlines: "The final decision is made by the Board."
    },
    {
        topic: "DEFENSE AND GRADUATION",
        subtopic: "Qualification Exam",
        question: "What is the Qualification Exam?",
        answer: "The qualification exam (or pre-defense) is a mandatory step for the doctorate that assesses the student's ability to conduct original research. It is an important milestone that precedes the final thesis defense.",
        details: [{
            icon: '🧐',
            category: 'Qualification Process',
            points: [
                "Objective: To assess the maturity of the research and the student's capability.",
                "Mandatory: It is mandatory for the Doctorate and may be required for the Master's, according to the program's regulations.",
                "Committee: Composed of at least three doctors, approved by the Board.",
                "Result: The student can be 'Approved' or 'Failed'. In case of failure, there is only one chance to retake the exam."
            ]
        }],
        legalBasis: "Art. 147, 148, 149, 150",
        documentation: "Version of the work for the committee, scheduling request.",
        deadlines: "The deadline for the second attempt is up to 120 days (Doctorate) or 60 days (Master's) after the first."
    },
    {
        topic: "DEFENSE AND GRADUATION",
        subtopic: "Defense Requirements",
        question: "What do I need to do to be able to defend my dissertation/thesis?",
        answer: "To schedule the defense, a series of academic and administrative requirements must be met, forming a mandatory checklist.",
        details: [{
            icon: '🏁',
            category: 'Main Category: Course Completion',
            points: [
                "Checklist: Credits completed, qualification exam passed, proficiency in a foreign language, teaching internship completed, declaration of no plagiarism, and supervisor's recommendation."
            ]
        }],
        legalBasis: "Art. 151 (Defense Requirements)",
        documentation: "Scheduling request, supervisor's authorization, version of the work for the committee, suggestion of names for the committee, proof of all requirements.",
        deadlines: "The Board has up to 30 days to approve the committee, and the defense must be scheduled within 30 days after approval."
    },
    {
        topic: "DEFENSE AND GRADUATION",
        subtopic: "Committee and Results",
        question: "How does the defense committee work and what are the possible outcomes?",
        answer: "The defense is a public session judged by a committee of experts. The outcome can be approval, approval with corrections, or failure.",
        details: [{
            icon: '🧑‍⚖️',
            category: 'Main Category: Examination Committee',
            points: [
                "Composition (Master's): Supervisor + 2 experts (1 external).",
                "Composition (Doctorate): Supervisor + 4 experts (2 external, 1 from another institution).",
                "Outcomes: Approved, Insufficient (with a deadline for corrections), Failed (leads to dismissal)."
            ]
        }],
        legalBasis: "Art. 156 (Committee Composition), Art. 157 (Outcomes)",
        documentation: "Minutes of the public defense session.",
        deadlines: "Deadline for corrections (if 'Insufficient'): 90 days (Master's) or 180 days (Doctorate)."
    },
    {
        topic: "DEFENSE AND GRADUATION",
        subtopic: "Diploma Issuance",
        question: "I passed! How do I request my diploma?",
        answer: "After approval and making the corrections, you need to deposit the final version of the work in the UEPB repository and then formally request the issuance of the diploma.",
        details: [{
            icon: '📜',
            category: 'Main Category: Diploma Issuance',
            points: [
                "Final Deposit: The final corrected version (PDF/A with catalog card) must be deposited in the Institutional Repository within 30 days of the defense.",
                "Diploma Request: The process is initiated by the student with the PRPGP, with all supporting documentation."
            ]
        }],
        legalBasis: "Art. 159 (Final Deposit), Art. 162 (Requirements for Conferral), Art. 163 (Documentation for Issuance)",
        documentation: "Standard request form, Minutes of the defense, Copy of the previous diploma, Personal documents, Proof of deposit, Library clearance statement, Declaration and transcript of completion.",
        deadlines: "Deposit Deadline: 30 days after the defense (extendable by another 15). The issuance of the diploma is the responsibility of the PRPGP."
    },
    {
        topic: "RIGHTS AND GOVERNANCE",
        subtopic: "Intellectual Property",
        question: "Who owns my research? Can I request confidentiality?",
        answer: "The research results are the property of UEPB, but the copyrights are protected. Yes, you can and should request confidentiality if you plan to publish or patent.",
        details: [{
            icon: '💡',
            category: 'Main Category: Intellectual Property',
            points: [
                "Ownership: The results belong to UEPB, but any dissemination must always mention the university, the supervisor, and the student.",
                "Confidentiality: You have the right to request a confidentiality period of up to 1 year for the dissemination of your work in the repository.",
                "Process: The confidentiality request is made at the time of the final deposit of the work."
            ]
        }],
        legalBasis: "Art. 187 (Dissemination and Confidentiality), Art. 188 (Ownership of Results)",
        documentation: "Deposit authorization form, with the embargo/confidentiality option checked.",
        deadlines: "Confidentiality Period: Up to 1 year, can be extended. The request is made at the time of deposit."
    },
    {
        topic: "RIGHTS AND GOVERNANCE",
        subtopic: "Transition Rules",
        question: "How do the transition rules for the new regulations work?",
        answer: "For students who entered up to the second academic term of 2023, the provisions of the previous regulations apply. This new resolution applies to those entering after its publication.",
        details: [{
            icon: '📜',
            category: 'Main Category: Applicable Rules',
            points: [
                "Time Frame: The entry date into the course determines which regulation applies to the student.",
                "Previous Rule: Students who entered up to 2023.2 follow the old regulations.",
                "New Rule: Students entering after the publication of this resolution follow the new rules."
            ]
        }],
        legalBasis: "Art. 189",
        documentation: "No specific documentation applies; the rule is applied automatically by the secretariat.",
        deadlines: "The transition rule is permanent for the specified cohorts."
    },
    {
        topic: "DEADLINES AND SPECIAL SITUATIONS",
        subtopic: "General Leave and Absence",
        question: "Can I take a break from the course for a while?",
        answer: "Yes, it is possible to request a 'Study Interruption' (general leave) for reasons of proven illness or maternity leave. The period of leave is not counted in the total time for course completion.",
        keywords: ["leave", "interruption", "maternity leave", "illness", "absence", "break", "suspend", "pregnant", "health", "medical certificate"],
        details: [{
            icon: '⏸️',
            category: 'Main Category: Study Interruption',
            points: [
                "Accepted Reasons: Work-related travel, proven illness, or maternity leave.",
                "Leave Durations: Master's (1 academic term), Doctorate (up to 2 academic terms).",
                "Effect: The leave period does not count towards the total course duration.",
                "Scholarship: The scholarship is suspended during the interruption, except for maternity leave.",
                "Maternity Leave: The graduate student is entitled to 180 days of leave, which does not suspend the scholarship and does not count towards the course deadline."
            ]
        }],
        legalBasis: "Art. 107 of Resolution/UEPB/CONSEPE/008/2023",
        documentation: "Formal request with proven justification (medical certificate, etc.), supervisor's opinion, and Board approval.",
        deadlines: "The request must be made before or during the period to be taken off."
    },
    {
        topic: "PROBLEMATIC SITUATIONS",
        subtopic: "Dismissal",
        question: "In what situations can a student be dismissed from the program?",
        answer: "Dismissal is the termination of the student's relationship with the program and occurs automatically in cases of insufficient academic performance, failure to meet deadlines, or serious infractions, such as plagiarism.",
        keywords: ["dismissal", "expulsion", "failure", "missed deadline", "dropping out", "plagiarism", "low GPA", "losing spot"],
        details: [{
            icon: '❌',
            category: 'Main Category: Causes for Dismissal',
            points: [
                "Failing the same mandatory course twice.",
                "Not passing the proficiency exams within the deadline.",
                "Failing to enroll for the semester on time.",
                "Failing the qualification exam or pre-defense twice.",
                "Exceeding the maximum time for course completion, including extensions.",
                "Having a Grade Point Average (GPA) below 7.0.",
                "Failing the final defense of the dissertation or thesis.",
                "Proven plagiarism in any academic work."
            ]
        }],
        legalBasis: "Art. 110 and Art. 111 of Resolution/UEPB/CONSEPE/008/2023",
        documentation: "The process is administrative, initiated by the Coordination, ensuring the student the right to a full defense and appeal to the Board.",
        deadlines: "Dismissal becomes effective after official notification or the publication of the Board's decision."
    },
    {
        topic: "DEADLINES AND SPECIAL SITUATIONS",
        subtopic: "General Leave and Absence",
        question: "How does maternity leave work in graduate school?",
        answer: "A graduate student is entitled to 180 days of maternity leave. This period is not deducted from the total time for course completion, and for scholarship students, the scholarship is not suspended during the leave.",
        keywords: ["maternity leave", "mother", "pregnant", "childbirth", "adoption", "leave", "baby", "child", "scholarship", "deadline"],
        details: [{
            icon: '🤱',
            category: 'Main Category: Rights of Graduate Students',
            points: [
                "Leave Duration: 180 days.",
                "Deadline Calculation: The leave period is NOT counted in the maximum time for the defense of the dissertation or thesis.",
                "Scholarship: The scholarship is fully maintained during the leave, being an exception to the rule of suspension for absence.",
                "Home-based Activities: A pregnant student is also entitled to a regime of home-based activities from the eighth month of pregnancy, lasting 4 months."
            ]
        }],
        legalBasis: "Art. 41 (§ 2), Art. 107 (§§ 6 and 7), and Art. 108 (I) of Resolution/UEPB/CONSEPE/008/2023",
        documentation: "Medical certificate or birth certificate to formalize the request with the program coordination.",
        deadlines: "The request must be formally made to the program coordination to ensure that deadlines and scholarship maintenance are guaranteed."
    },
    {
        topic: "RIGHTS AND GOVERNANCE",
        subtopic: "Direct Transfer Master's-Doctorate",
        question: "Is it possible to go from a master's to a doctorate directly (fast track)?",
        answer: "Yes, programs may allow students to transfer from a master's to a doctorate without a new public selection process, provided that excellence criteria are met.",
        details: [{
            icon: '🚀',
            category: 'Main Category: Advanced Academic Mobility',
            points: [
                "Condition: The program's regulations must provide for and detail this possibility.",
                "Criteria: The student must demonstrate exceptional performance, qualified academic production, and have a consistent work plan for the doctorate.",
                "Evaluation: The transfer depends on a rigorous evaluation by a committee appointed by the Board."
            ]
        }],
        legalBasis: "Art. 104",
        documentation: "Formal request, academic transcript, updated Lattes CV, scientific production, doctoral work plan, letter of recommendation from the supervisor.",
        deadlines: "The request must be made within a deadline defined by the program's regulations, usually after the master's qualification."
    },
    {
        topic: "RIGHTS AND GOVERNANCE",
        subtopic: "Student's Duties",
        question: "What are the main duties of a graduate student?",
        answer: "In addition to respecting UEPB's rules, the student must follow the study plan, keep the supervisor informed, participate in activities, complete the teaching internship, and submit projects to the Ethics Committee when necessary.",
        details: [{
            icon: '📋',
            category: 'Main Category: Academic Responsibilities',
            points: [
                "Uphold the institution's name and comply with the regulations.",
                "Keep their registration and curricular data updated.",
                "Dedicate themselves to the course activities and meet deadlines.",
                "Complete the Teaching Internship (mandatory for scholarship holders).",
                "Observe the guidelines of the Research Ethics Committee."
            ]
        }],
        legalBasis: "Art. 74",
        documentation: "Proof of submission to the Ethics Committee, teaching internship reports, etc., as required by the program.",
        deadlines: "Duties must be fulfilled throughout the entire course."
    },
    {
        topic: "RIGHTS AND GOVERNANCE",
        subtopic: "Student Representation",
        question: "How does student representation on the Board work?",
        answer: "Students have the right to representation on the program's Board, with the right to speak and vote, ensuring their participation in decisions. The term is for 1 year, with one reappointment allowed.",
        details: [{
            icon: '🗣️',
            category: 'Main Category: Governance and Participation',
            points: [
                "Composition: The Board includes student representatives, elected by their peers.",
                "Term: The student representative's term is for 1 (one) year.",
                "Reappointment: One reappointment for a second term is allowed.",
                "Voice and Vote: Representatives actively participate in meetings and deliberations."
            ]
        }],
        legalBasis: "Art. 31, item III and §3",
        documentation: "The election is organized by the students themselves and formalized with the program coordination.",
        deadlines: "The term is for 1 year, with periodic elections to choose representatives."
    },
    {
        topic: "CONCLUSION REQUIREMENTS",
        subtopic: "Finalization Criteria",
        question: "What are the mandatory requirements to complete the Master's in Pharmaceutical Sciences?",
        answer: "To complete the Master's at PPGCF/UEPB, the student must meet specific criteria regarding deadline, language proficiency, and scientific production, which vary depending on their scholarship status.",
        details: [{
            icon: '🎯',
            category: 'Main Category: Conclusion Requirements',
            points: [
                "Deadline: Maximum duration of 24 months, with a possible extension of up to 6 months upon board approval.",
                "Proficiency: Approval in an English Language Proficiency Exam from a recognized public institution.",
                "Scientific Production (without scholarship): Minimum of 1 submitted product (Qualis A article, patent, or book chapter).",
                "Scientific Production (with scholarship): Minimum of 2 submitted products or 1 accepted product (Qualis A article, patent, or book chapter).",
                "Note: The student must be the first author of the submitted articles."
            ]
        }],
        legalBasis: "PPGCF's Internal Regulations",
        documentation: "Proof of proficiency, proof of submission/acceptance of scientific products.",
        deadlines: "Maximum deadline of 24 months for completion, with the possibility of a 6-month extension."
    }
];

// Quick access cards data (English Version)
const quickAccessCards_en = [
    { icon: 'fas fa-user-plus', title: 'Admission', description: 'Selection process, enrollment and admission', topic: 'ENROLLMENT AND ADMISSION' },
    { icon: 'fas fa-graduation-cap', title: 'Academic Life', description: 'Credits, courses, and evaluations', topic: 'ACADEMIC LIFE' },
    { icon: 'fas fa-money-bill-wave', title: 'Scholarships', description: 'Financial aid and dedication', topic: 'FINANCIAL MATTERS' },
    { icon: 'fas fa-chalkboard-teacher', title: 'Supervision', description: 'Supervisors and relationships', topic: 'SUPERVISION' },
    { icon: 'fas fa-certificate', title: 'Defense', description: 'Qualification, defense, and graduation', topic: 'DEFENSE AND GRADUATION' },
    { icon: 'fas fa-balance-scale', title: 'Rights & Governance', description: 'Structure, operation, and rights', topic: 'RIGHTS AND GOVERNANCE' },
    { icon: 'fas fa-clock', title: 'Deadlines & Special Situations', description: 'Course deadlines and special cases', topic: 'DEADLINES AND SPECIAL SITUATIONS' },
    { icon: 'fas fa-exclamation-triangle', title: 'Problematic Situations', description: 'Dismissal and academic issues', topic: 'PROBLEMATIC SITUATIONS' },
    { icon: 'fas fa-users', title: 'Faculty', description: 'Professors, supervisors, and accreditation', topic: 'FACULTY' },
    { icon: 'fas fa-plane-departure', title: 'Event Support', description: 'Aid for conference participation', topic: 'SUPPORT FOR SCIENTIFIC EVENTS' },
    { icon: 'fas fa-check-circle', title: 'Conclusion Requirements', description: 'Criteria to finish the course', topic: 'CONCLUSION REQUIREMENTS' },
    { icon: 'fas fa-hands-helping', title: 'Volunteer Professor', description: 'Rules for voluntary work at UEPB', topic: 'VOLUNTEER PROFESSOR' },
    { icon: 'fas fa-microscope', title: 'Postdoctoral Research', description: 'Fellowship, rules, and activities', topic: 'POSTDOCTORAL RESEARCH' },
    { icon: 'fas fa-info-circle', title: 'About this Version', description: 'Information on updates and improvements', topic: 'ABOUT' }
];

// Topic icons (English Version)
const topicIcons_en = {
    "ENROLLMENT AND ADMISSION": "fas fa-door-open",
    "STRUCTURE AND GOVERNANCE": "fas fa-building",
    "FACULTY": "fas fa-users",
    "FINANCIAL MATTERS": "fas fa-money-bill-wave",
    "ACADEMIC LIFE": "fas fa-graduation-cap",
    "DEADLINES AND SPECIAL SITUATIONS": "fas fa-clock",
    "SUPERVISION": "fas fa-chalkboard-teacher",
    "DEFENSE AND GRADUATION": "fas fa-certificate",
    "PROBLEMATIC SITUATIONS": "fas fa-exclamation-triangle",
    "RIGHTS AND GOVERNANCE": "fas fa-balance-scale",
    "SUPPORT FOR SCIENTIFIC EVENTS": "fas fa-plane-departure",
    "VOLUNTEER PROFESSOR": "fas fa-hands-helping",
    "POSTDOCTORAL RESEARCH": "fas fa-microscope",
    "CONCLUSION REQUIREMENTS": "fas fa-check-circle"
};

// FAQ Data (Spanish Version)
const faqData_es = [
    {
        topic: "APOYO A EVENTOS CIENTÍFICOS",
        subtopic: "Reglas Generales",
        question: "¿La UEPB ofrece ayuda económica para presentar trabajos en congresos?",
        answer: "Sí, la UEPB ofrece incentivos financieros para docentes del cuadro permanente y profesores visitantes para participar en eventos científicos o tecnológicos, nacionales o internacionales, con presentación de trabajo.",
        details: [{
            icon: '✈️',
            category: 'Categoría Principal: Incentivo a la Producción Científica',
            points: [
                "El apoyo está destinado a cubrir los costos de participación en eventos para la divulgación de investigaciones.",
                "El programa busca fortalecer las políticas de Posgrado e Investigación de la universidad."
            ]
        }],
        legalBasis: "Art. 1 de la Resolución/UEPB/CONSEPE/079/2015",
        documentation: "Formulario de solicitud, resumen del trabajo, carta de aceptación, folleto del evento, entre otros.",
        deadlines: "La solicitud debe realizarse con al menos 60 días de antelación al evento."
    },
    {
        topic: "APOYO A EVENTOS CIENTÍFICOS",
        subtopic: "Reglas Generales",
        question: "¿Qué tipo de ayuda puedo solicitar y quién tiene derecho?",
        answer: "Docentes permanentes y visitantes en servicio activo pueden solicitar O pasajes aéreos (clase económica) O hasta 4 viáticos diarios. No está permitido solicitar ambos. Los profesores con licencia de sus actividades no tienen derecho a la ayuda.",
        details: [{
            icon: '💰',
            category: 'Categoría Principal: Tipos de Ayuda',
            points: [
                "El solicitante debe elegir entre pasajes O viáticos.",
                "Los pasajes son siempre en clase económica, buscando la mejor relación costo-beneficio.",
                "El límite es de 4 viáticos, de acuerdo con la duración del evento.",
                "Solo los miembros del profesorado permanente o visitantes pueden solicitarlo."
            ]
        }],
        legalBasis: "Art. 2 y Art. 5 de la Resolución/UEPB/CONSEPE/079/2015",
        documentation: "Formulario de solicitud específico para pasajes o viáticos.",
        deadlines: "La solicitud debe realizarse con al menos 60 días de antelación."
    },
    {
        topic: "APOYO A EVENTOS CIENTÍFICOS",
        subtopic: "Reglas Generales",
        question: "¿Cuáles son los prerrequisitos para recibir la ayuda?",
        answer: "Para que la solicitud sea aprobada, el trabajo a presentar debe tener a un estudiante de la UEPB como primer autor, y el profesor solicitante debe tener producción intelectual reciente.",
        details: [{
            icon: '📋',
            category: 'Categoría Principal: Criterios de Elegibilidad',
            points: [
                "Es obligatorio tener un trabajo aceptado en el evento, preferiblemente para presentación oral.",
                "Para eventos nacionales, el primer autor debe ser un estudiante de grado, iniciación científica o posgrado lato sensu de la UEPB.",
                "Para eventos internacionales, el primer autor debe ser un estudiante de posgrado stricto sensu de la UEPB.",
                "El profesor solicitante debe haber publicado al menos un artículo, libro o capítulo de libro en los últimos 3 años."
            ]
        }],
        legalBasis: "Art. 3 de la Resolución/UEPB/CONSEPE/079/2015",
        documentation: "Copia del trabajo aceptado, comprobante de producción intelectual reciente y un documento que demuestre el vínculo del estudiante como primer autor.",
        deadlines: "El documento de aceptación del trabajo puede enviarse hasta 15 días antes del evento."
    },
    {
        topic: "APOYO A EVENTOS CIENTÍFICOS",
        subtopic: "Reglas Generales",
        question: "¿Con qué frecuencia puedo solicitar esta ayuda?",
        answer: "Existe un límite de solicitudes para garantizar que más docentes puedan beneficiarse. Se permite una ayuda para un congreso nacional por año y una ayuda para un congreso internacional cada dos años.",
        details: [{
            icon: '🗓️',
            category: 'Categoría Principal: Límites de Solicitud',
            points: [
                "Ayuda para evento nacional: 1 por año.",
                "Ayuda para evento internacional: 1 cada 2 años."
            ]
        }],
        legalBasis: "Art. 4 de la Resolución/UEPB/CONSEPE/079/2015",
        documentation: "N/A",
        deadlines: "El control se basa en las solicitudes anteriores del profesor."
    },
    {
        topic: "APOYO A EVENTOS CIENTÍFICOS",
        subtopic: "Reglas Generales",
        question: "¿Cómo y cuándo debo presentar el informe de gastos?",
        answer: "Después del evento, el profesor beneficiario tiene 15 días para comprobar su participación y la presentación del trabajo ante el Vicerrectorado de Posgrado e Investigación (PRPGP).",
        details: [{
            icon: '🧾',
            category: 'Categoría Principal: Informe de Gastos',
            points: [
                "Presentar el certificado de participación en el congreso.",
                "Presentar el comprobante de la presentación del trabajo.",
                "Entregar los boletos de viaje (talones de las tarjetas de embarque), si se proporcionaron pasajes aéreos."
            ]
        }],
        legalBasis: "Art. 8 de la Resolución/UEPB/CONSEPE/079/2015",
        documentation: "Certificados y boletos de viaje.",
        deadlines: "El plazo para entregar la documentación es de 15 días después del final del evento."
    },
    {
        topic: "INVESTIGACIÓN POSTDOCTORAL",
        subtopic: "Reglas Generales",
        question: "¿Qué es una Beca Postdoctoral y quién puede realizarla en la UEPB?",
        answer: "Es una estancia de investigación realizada por profesionales con un título de doctor que no forman parte del personal permanente de la UEPB. El objetivo es desarrollar un proyecto de investigación bajo la supervisión de un miembro del profesorado de un programa de posgrado de la universidad.",
        details: [{
            icon: '👨‍🔬',
            category: 'Categoría Principal: Definición y Público',
            points: [
                "Dirigido a investigadores externos con un doctorado.",
                "Las actividades se realizan a tiempo completo o parcial.",
                "La estancia siempre está vinculada a un proyecto de investigación y a un supervisor acreditado en un programa de posgrado."
            ]
        }],
        legalBasis: "Art. 1, § 1 de la Resolución/UEPB/CONSEPE/008/2022",
        documentation: "Carta de aceptación del supervisor, copia del diploma de doctor, CV Lattes y plan de trabajo.",
        deadlines: "La duración mínima de la estancia es de 3 meses."
    },
    {
        topic: "INVESTIGACIÓN POSTDOCTORAL",
        subtopic: "Reglas Generales",
        question: "Además de la investigación, ¿qué otras actividades puede realizar un investigador postdoctoral?",
        answer: "Un investigador postdoctoral puede participar en diversas actividades, incluyendo la docencia en cursos de grado y posgrado, la supervisión de estudiantes de iniciación científica e incluso la co-supervisión de estudiantes de maestría y doctorado, a discreción del comité del programa.",
        details: [{
            icon: '📚',
            category: 'Categoría Principal: Actividades Permitidas',
            points: [
                "Impartir clases en cursos de grado y posgrado, siempre bajo la responsabilidad de un miembro del profesorado permanente.",
                "Supervisar a estudiantes de Iniciación Científica.",
                "Actuar como co-supervisor de tesinas y tesis, si es aprobado por el comité.",
                "Puede convertirse en supervisor principal, siempre que cumpla con los requisitos de la CAPES y del programa."
            ]
        }],
        legalBasis: "Art. 1, §§ 2, 4, 5 y 6 de la Resolución/UEPB/CONSEPE/008/2022",
        documentation: "Todas las actividades deben estar descritas en el Plan de Trabajo aprobado.",
        deadlines: "La co-supervisión y supervisión dependen de la aprobación específica del comité del programa."
    },
    {
        topic: "INVESTIGACIÓN POSTDOCTORAL",
        subtopic: "Reglas Generales",
        question: "¿Cómo funciona el proceso de solicitud postdoctoral?",
        answer: "El candidato debe presentar una solicitud al Comité del Programa de Posgrado deseado, que contenga la documentación necesaria, incluyendo una carta de aceptación del futuro supervisor y un plan de trabajo detallado.",
        details: [{
            icon: '📝',
            category: 'Categoría Principal: Documentación de Solicitud',
            points: [
                "Carta de aceptación de un profesor supervisor del programa.",
                "Copia del diploma de doctor.",
                "Curriculum Vitae (formato Lattes).",
                "Plan de trabajo detallado con proyecto de investigación, cronograma y fuente de financiación.",
                "Declaración de licencia de la institución de origen (si existe una relación laboral y es de dedicación a tiempo completo)."
            ]
        }],
        legalBasis: "Art. 3 de la Resolución/UEPB/CONSEPE/008/2022",
        documentation: "La documentación completa debe ser presentada en la secretaría del programa deseado.",
        deadlines: "El proceso puede ser de flujo continuo o a través de convocatorias específicas, dependiendo del programa."
    },
    {
        topic: "INVESTIGACIÓN POSTDOCTORAL",
        subtopic: "Reglas Generales",
        question: "¿Cuál es la duración de la estancia y cómo funciona la renovación?",
        answer: "La estancia tiene una duración inicial de hasta 12 meses y puede renovarse anualmente hasta un límite máximo de 60 meses (5 años). La duración mínima para ser considerada una estancia postdoctoral es de 3 meses.",
        details: [{
            icon: '⏳',
            category: 'Categoría Principal: Duración y Prórroga',
            points: [
                "Duración mínima: 3 meses.",
                "Duración inicial estándar: Hasta 12 meses.",
                "Duración máxima total: 60 meses (5 años), sujeta a renovaciones anuales.",
                "La renovación depende de la aprobación de un informe de actividades por parte del comité del programa."
            ]
        }],
        legalBasis: "Art. 4, §§ 3 y 4 de la Resolución/UEPB/CONSEPE/008/2022",
        documentation: "Para renovar, se debe presentar un informe anual de actividades con la evaluación del supervisor.",
        deadlines: "El informe debe presentarse al final de cada año de la estancia para la evaluación de la renovación."
    },
    {
        topic: "INVESTIGACIÓN POSTDOCTORAL",
        subtopic: "Reglas Generales",
        question: "¿La estancia postdoctoral crea una relación laboral o concede un título?",
        answer: "No. La participación en la estancia postdoctoral no crea ninguna relación laboral o funcional con la UEPB. Como una estancia académica, no confiere un nuevo título al investigador, sino un certificado de finalización.",
        details: [{
            icon: '📜',
            category: 'Categoría Principal: Naturaleza de la Relación',
            points: [
                "No existe una relación laboral o funcional.",
                "Las actividades son voluntarias a menos que el investigador sea becario.",
                "No confiere un nuevo grado o título.",
                "Al final, el investigador recibe un certificado emitido por el Vicerrectorado de Posgrado e Investigación (PRPGP)."
            ]
        }],
        legalBasis: "Art. 8 y Art. 9 de la Resolución/UEPB/CONSEPE/008/2022",
        documentation: "El Certificado de Finalización es emitido por el PRPGP tras la aprobación del informe final.",
        deadlines: "El informe final debe ser aprobado por el comité del programa al final de la estancia."
    },
    {
        topic: "PROFESOR VOLUNTARIO",
        subtopic: "Reglas Generales",
        question: "¿Qué es el Programa de Profesores y Personal Técnico Voluntario (PPTAV)?",
        answer: "Es un programa que permite a profesores y personal administrativo, especialmente a aquellos que están jubilados o no tienen vínculos formales con la UEPB, continuar contribuyendo a la universidad en actividades culturales, educativas y científicas. El servicio es voluntario y no crea una relación laboral ni una obligación de remuneración.",
        details: [{
            icon: '🤝',
            category: 'Categoría Principal: Naturaleza de la Relación',
            points: [
                "El programa se rige por la Ley Federal N.º 9.608/1998.",
                "La participación se formaliza mediante un Término de Adhesión.",
                "No genera vínculos laborales, salario ni obligaciones laborales y de seguridad social para la UEPB.",
                "Busca prevenir la discontinuidad en las actividades de docencia, investigación y extensión."
            ]
        }],
        legalBasis: "Art. 1 y Art. 2 de la Resolución/UEPB/CONSUNI/0208/2017",
        documentation: "Término de Adhesión firmado entre el voluntario y la UEPB.",
        deadlines: "La duración de la relación es de un máximo de 1 año, renovable."
    },
    {
        topic: "PROFESOR VOLUNTARIO",
        subtopic: "Reglas Generales",
        question: "¿Quién puede postularse para ser Profesor Voluntario?",
        answer: "Pueden postularse profesores jubilados (de la UEPB u otras instituciones) o profesionales sin un vínculo formal con la UEPB que tengan reconocida experiencia en su campo. Para trabajar en programas de posgrado stricto sensu, se requiere un título de Doctor.",
        details: [{
            icon: '🧑‍🏫',
            category: 'Categoría Principal: Requisitos de Adhesión',
            points: [
                "Ser un profesor jubilado o no tener un vínculo formal con la UEPB.",
                "Tener reconocida experiencia en el campo de actividad.",
                "Tener un Plan de Trabajo aprobado por los órganos pertinentes del curso o programa.",
                "Para Estudios de Posgrado (Maestría/Doctorado), es obligatorio tener un título de Doctor."
            ]
        }],
        legalBasis: "Art. 3 y §2 de la Resolución/UEPB/CONSUNI/0208/2017",
        documentation: "Solicitud formal, Plan de Trabajo y Curriculum Vitae (preferiblemente Lattes).",
        deadlines: "El proceso de solicitud puede abrirse en cualquier momento, dependiendo de la aceptación de la unidad interesada."
    },
    {
        topic: "PROFESOR VOLUNTARIO",
        subtopic: "Reglas Generales",
        question: "¿Qué actividades puede realizar un Profesor Voluntario?",
        answer: "Un Profesor Voluntario puede realizar la mayoría de las actividades académicas, como enseñar, investigar, participar en proyectos de extensión, supervisar a estudiantes y formar parte de comités de examen.",
        details: [{
            icon: '📚',
            category: 'Categoría Principal: Actividades Permitidas',
            points: [
                "Actividades de docencia en estudios de grado y posgrado.",
                "Desarrollo de proyectos de investigación y extensión.",
                "Supervisión de proyectos de fin de grado, tesinas de maestría y tesis doctorales.",
                "Participación en comités de monografías, tesinas, tesis y selecciones públicas.",
                "Participación en reuniones de comités, con derecho a voz pero sin voto."
            ]
        }],
        legalBasis: "Art. 4 de la Resolución/UEPB/CONSUNI/0208/2017",
        documentation: "Las actividades deben estar detalladas y aprobadas en el Plan de Trabajo.",
        deadlines: "Las actividades deben llevarse a cabo dentro del período de validez del Término de Adhesión."
    },
    {
        topic: "PROFESOR VOLUNTARIO",
        subtopic: "Reglas Generales",
        question: "¿Cuáles son los derechos y limitaciones de un Profesor Voluntario?",
        answer: "El voluntario tiene derecho a utilizar la infraestructura de la UEPB (bibliotecas, laboratorios) y la afiliación institucional. Sin embargo, no tiene derechos administrativos, como votar o ser elegido para puestos de liderazgo o representación.",
        details: [{
            icon: '⚖️',
            category: 'Categoría Principal: Derechos y Prohibiciones',
            points: [
                "Derecho a usar el título de 'Profesor Voluntario de la UEPB'.",
                "Derecho a acceder a espacios como laboratorios y bibliotecas.",
                "Derecho a un correo electrónico institucional.",
                "Limitación: No puede votar ni ser elegido para cargos administrativos (Jefe de Departamento, Coordinador, etc.).",
                "Limitación: Participa en reuniones de comités con derecho a voz pero sin voto."
            ]
        }],
        legalBasis: "Art. 4 (§1 y §2) y Art. 12 de la Resolución/UEPB/CONSUNI/0208/2017",
        documentation: "Los derechos y deberes se formalizan en el Término de Adhesión.",
        deadlines: "Los derechos son válidos durante la vigencia del Término de Adhesión."
    },
    {
        topic: "PROFESOR VOLUNTARIO",
        subtopic: "Reglas Generales",
        question: "¿Cuál es el proceso para convertirse en Profesor Voluntario?",
        answer: "El interesado debe formalizar una solicitud ante la unidad de interés (Departamento o Programa de Posgrado), presentando un Plan de Trabajo y su currículum. La solicitud será analizada y votada por el comité de la unidad.",
        details: [{
            icon: '📝',
            category: 'Categoría Principal: Proceso de Adhesión',
            points: [
                "1. Preparar una solicitud y un Plan de Trabajo que detalle las actividades, el período y la carga horaria semanal.",
                "2. Presentar la solicitud, el plan y el currículum al comité del Departamento o Programa.",
                "3. Esperar el dictamen de la unidad, que tiene 30 días para responder.",
                "4. Si se aprueba, firmar el Término de Adhesión con la UEPB, que será registrado en la PROGEP."
            ]
        }],
        legalBasis: "Art. 6, 7 y 8 de la Resolución/UEPB/CONSUNI/0208/2017",
        documentation: "Solicitud, Plan de Trabajo y Curriculum Vitae.",
        deadlines: "El comité de la unidad tiene 30 días para emitir un dictamen sobre la solicitud."
    },
    {
        topic: "PROFESOR VOLUNTARIO",
        subtopic: "Reglas Generales",
        question: "¿Cuál es la duración de la relación de voluntariado y cómo funciona la renovación?",
        answer: "El Término de Adhesión tiene una duración máxima de 1 (un) año. Es posible solicitar una renovación por el mismo período, siguiendo los mismos procedimientos que la solicitud inicial e incluyendo un informe de las actividades ya realizadas.",
        details: [{
            icon: '🔄',
            category: 'Categoría Principal: Duración y Renovación',
            points: [
                "Duración inicial: Máximo de 1 año.",
                "Renovación: Permitida por otro año más.",
                "Proceso de Renovación: Requiere la presentación de un informe de actividades y una nueva evaluación de desempeño.",
                "La solicitud de renovación pasa por el mismo proceso de aprobación por parte del comité de la unidad."
            ]
        }],
        legalBasis: "Art. 9 de la Resolución/UEPB/CONSUNI/0208/2017",
        documentation: "Para la renovación, se requiere un informe de actividades y una nueva solicitud.",
        deadlines: "La solicitud de renovación debe realizarse antes de que finalice el período de vigencia actual."
    },
    {
        topic: "VIDA ACADÉMICA",
        subtopic: "Prácticas de Docencia",
        question: "¿Cuál es el objetivo de las Prácticas de Docencia?",
        answer: "Las Prácticas de Docencia tienen como objetivo preparar a los estudiantes de posgrado para una carrera docente, creando oportunidades de mejora a través de la participación en actividades de enseñanza de grado.",
        details: [{
            icon: '🎯',
            category: 'Categoría Principal: Formación de Profesores',
            points: [
                "Capacitar a los estudiantes de posgrado para la docencia en la educación superior.",
                "Promover la integración entre los programas de posgrado y los cursos de grado.",
                "Mejorar la calidad de la enseñanza en ambos niveles (grado y posgrado)."
            ]
        }],
        legalBasis: "Art. 1 de la Resolución/UEPB/CONSEPE/032/2011",
        documentation: "Plan de Trabajo e Informe de Actividades.",
        deadlines: "Las prácticas deben realizarse a partir del segundo semestre de inscripción en el curso."
    },
    {
        topic: "VIDA ACADÉMICA",
        subtopic: "Prácticas de Docencia",
        question: "¿Son obligatorias las Prácticas de Docencia para todos?",
        answer: "Sí, las prácticas son una actividad obligatoria para todos los estudiantes de maestría y doctorado. Sin embargo, los estudiantes que ya son profesores de educación superior pueden solicitar una exención de la actividad.",
        details: [{
            icon: '🧑‍🏫',
            category: 'Categoría Principal: Obligatoriedad y Exenciones',
            points: [
                "El requisito tiene como objetivo integrar la formación del estudiante de posgrado, según las normas de la CAPES.",
                "La exención no es automática y debe solicitarse formalmente.",
                "La decisión final sobre la exención recae en el Comité del Programa."
            ]
        }],
        legalBasis: "Art. 2 y Párrafo Único de la Resolución/UEPB/CONSEPE/032/2011",
        documentation: "Para la exención, se requiere prueba de experiencia docente en Educación Superior.",
        deadlines: "La solicitud de exención debe realizarse ante el Comité del Programa."
    },
    {
        topic: "VIDA ACADÉMICA",
        subtopic: "Prácticas de Docencia",
        question: "¿Cuál es la duración y la carga horaria de las prácticas?",
        answer: "La duración varía entre maestrías y doctorados, con una carga horaria semanal limitada para no interferir con las otras actividades del estudiante de posgrado.",
        details: [{
            icon: '⏳',
            category: 'Categoría Principal: Duración y Carga Horaria',
            points: [
                "Maestría: Duración mínima de 1 semestre y máxima de 2 semestres.",
                "Doctorado: Duración mínima de 2 semestres y máxima de 3 semestres.",
                "Carga Horaria Semanal: Máximo de 4 horas por semana."
            ]
        }],
        legalBasis: "Art. 3 y Art. 4 de la Resolución/UEPB/CONSEPE/032/2011",
        documentation: "El Plan de Trabajo detallará la distribución de la carga horaria.",
        deadlines: "La carga horaria debe completarse durante el semestre académico en que el estudiante está inscrito en la actividad."
    },
    {
        topic: "VIDA ACADÉMICA",
        subtopic: "Prácticas de Docencia",
        question: "¿Qué actividades puedo realizar durante las Prácticas de Docencia?",
        answer: "Las prácticas permiten la participación en diversas actividades académicas, siendo una de las principales la impartición de un porcentaje de las clases teóricas o prácticas.",
        details: [{
            icon: '📚',
            category: 'Categoría Principal: Actividades Realizadas',
            points: [
                "Participar en el desarrollo del programa de estudios y los planes de lecciones.",
                "Preparar e impartir clases teóricas y/o prácticas (mínimo del 20% y máximo del 30% de la carga horaria del curso).",
                "Asistir en el proceso de evaluación de los estudiantes de grado.",
                "Supervisar a estudiantes de Iniciación Científica y Proyectos Finales.",
                "Presentar seminarios o conferencias."
            ]
        }],
        legalBasis: "Art. 5 de la Resolución/UEPB/CONSEPE/032/2011",
        documentation: "Las actividades deben detallarse en el Plan de Trabajo.",
        deadlines: "Las actividades deben seguir el cronograma aprobado en el Plan de Trabajo."
    },
    {
        topic: "VIDA ACADÉMICA",
        subtopic: "Prácticas de Docencia",
        question: "¿Cómo funcionan la inscripción y la atribución de créditos para las prácticas?",
        answer: "El estudiante se inscribe en un curso específico de Prácticas de Docencia. La actividad genera créditos que son adicionales al currículo regular del programa.",
        details: [{
            icon: '📊',
            category: 'Categoría Principal: Inscripción y Créditos',
            points: [
                "Maestría: Hasta 2 créditos (30 horas).",
                "Doctorado: Hasta 4 créditos (60 horas).",
                "Créditos Adicionales: No reemplazan los créditos obligatorios o electivos del programa.",
                "Inscripción: Se realiza a partir del segundo semestre del curso."
            ]
        }],
        legalBasis: "Art. 6, §1, §2 y Art. 7 de la Resolución/UEPB/CONSEPE/032/2011",
        documentation: "La inscripción se formaliza en la Secretaría del Programa, con la entrega del Plan de Trabajo.",
        deadlines: "La inscripción debe realizarse en el período académico en que se llevarán a cabo las prácticas."
    },
    {
        topic: "VIDA ACADÉMICA",
        subtopic: "Prácticas de Docencia",
        question: "¿Necesito un Plan de Trabajo? ¿Qué debe contener?",
        answer: "Sí, es obligatorio un Plan de Trabajo detallado. Debe prepararse junto con su supervisor y ser aprobado por el Comité del Programa y el Departamento responsable.",
        details: [{
            icon: '📋',
            category: 'Categoría Principal: Planificación de las Prácticas',
            points: [
                "Contenido: Justificación, objetivos, carga horaria semanal, cronograma de actividades y referencias.",
                "Firmas: Debe estar firmado por usted (el estudiante), su supervisor y el profesor del curso (si es diferente del supervisor).",
                "Aprobación: El plan debe ser aprobado antes del inicio de las actividades."
            ]
        }],
        legalBasis: "Art. 8 de la Resolución/UEPB/CONSEPE/032/2011",
        documentation: "El Plan de Trabajo debe presentarse en la Secretaría del Programa al inscribirse en la disciplina de prácticas.",
        deadlines: "El plan debe presentarse antes del inicio del período académico de las prácticas."
    },
    {
        topic: "VIDA ACADÉMICA",
        subtopic: "Prácticas de Docencia",
        question: "¿Cómo seré evaluado en las Prácticas de Docencia?",
        answer: "La evaluación se basa en un informe final que usted prepara al completar las actividades. El informe es evaluado por su supervisor y posteriormente por el Comité del Programa.",
        details: [{
            icon: '✅',
            category: 'Categoría Principal: Evaluación y Finalización',
            points: [
                "Informe Parcial: Un informe sobre las actividades en el aula debe presentarse al profesor del curso dentro de los 15 días de su finalización.",
                "Informe Final: Un informe completo, firmado por usted y su supervisor (con su opinión adjunta), debe presentarse al Comité dentro de los 30 días posteriores al final de todas las actividades.",
                "Resultado: El Comité puede aprobar, solicitar adiciones o rechazar el informe. En caso de rechazo, se deben realizar nuevas prácticas."
            ]
        }],
        legalBasis: "Art. 10, Art. 11 y Art. 12 de la Resolución/UEPB/CONSEPE/032/2011",
        documentation: "Informe de Prácticas de Docencia, según el modelo o las directrices del programa.",
        deadlines: "Informe Parcial (15 días después de que terminen las clases), Informe Final (30 días después de que terminen todas las actividades)."
    },
    {
        topic: "INGRESO Y ADMISIÓN",
        subtopic: "Proceso de Selección Regular",
        question: "¿Cómo funciona el proceso de selección regular?",
        answer: "El proceso de selección es el punto de entrada oficial al programa, regido por una convocatoria pública que detalla todas las reglas, fechas y documentos necesarios.",
        details: [{
            icon: '📝',
            category: 'Categoría Principal: Proceso de Selección',
            points: [
                "Convocatoria: Es el documento más importante, publicado con al menos 30 días de antelación. Define vacantes, criterios, cronograma y documentación.",
                "Inscripción: Generalmente en línea, requiere completar formularios y enviar documentos escaneados.",
                "Flujo Continuo: El programa puede optar por un modelo de 'flujo continuo', permitiendo inscripciones en cualquier momento del año, según la convocatoria."
            ]
        }],
        legalBasis: "Art. 79 (Estandarización), Art. 81 (Flujo Continuo), Art. 87 (Comité de Selección), Art. 88 (Validez del Proceso)",
        documentation: "Solicitud de inscripción, Formulario de inscripción, Copia del diploma (o declaración), Expediente académico, CV Lattes, Comprobante de pago de la tasa.",
        deadlines: "Publicación de la Convocatoria: Mínimo 30 días antes de las inscripciones. Apelaciones: Plazo definido en la convocatoria, con el Comité como primera instancia."
    },
    {
        topic: "INGRESO Y ADMISIÓN",
        subtopic: "Matrícula Institucional",
        question: "¡Fui aceptado! ¿Cómo completo la matrícula institucional?",
        answer: "La matrícula institucional es el acto que formaliza tu conexión con la UEPB. Perder el plazo significa perder tu plaza, incluso si fuiste aceptado.",
        details: [{
            icon: '🔗',
            category: 'Categoría Principal: Vínculo Académico',
            points: [
                "Procedimiento: Se realiza en la secretaría del programa, dentro del período estipulado en el calendario académico.",
                "Condición: Es un prerrequisito para la primera inscripción en cursos.",
                "Prohibición: Está prohibida la matrícula simultánea en más de un programa de posgrado stricto sensu en la UEPB."
            ]
        }],
        legalBasis: "Art. 100 (Obligatoriedad y Plazos), Art. 101 (Prohibición de Matrícula Simultánea), Art. 102 (Diplomas Extranjeros), Art. 103 (Matrícula Semestral)",
        documentation: "Documentos enumerados en la convocatoria de selección (diploma, expediente, documentos personales, etc.).",
        deadlines: "Plazo definido en el calendario académico del programa. No matricularse resulta en la pérdida automática de la plaza (Art. 100, §4)."
    },
    {
        topic: "INGRESO Y ADMISIÓN",
        subtopic: "Traslado",
        question: "¿Puedo trasladarme de otro programa de maestría/doctorado al PPGCF?",
        answer: "Sí, el traslado es posible, pero depende de la disponibilidad de plazas, la aprobación del Comité y el cumplimiento de requisitos específicos.",
        details: [{
            icon: '🔄',
            category: 'Categoría Principal: Movilidad Académica',
            points: [
                "Requisitos: Ser estudiante regular de un programa con una calificación CAPES igual o superior, haber completado al menos 6 meses y tener la aceptación formal de un supervisor del PPGCF.",
                "Proceso: La solicitud debe ser aprobada por los Comités de ambos programas (origen y destino)."
            ]
        }],
        legalBasis: "Art. 86, §1 (Admisión por Traslado), Art. 105 (Condiciones Mínimas)",
        documentation: "Solicitud formal, Expediente académico de la institución de origen, Programas de los cursos, Carta de aceptación del nuevo supervisor, Carta de consentimiento del programa de origen.",
        deadlines: "El tiempo ya cursado en el programa de origen se cuenta para la duración máxima. La decisión final recae en el Comité del PPGCF."
    },
    {
        topic: "INGRESO Y ADMISIÓN",
        subtopic: "Reingreso",
        question: "Fui dado de baja del programa. ¿Puedo intentar ingresar de nuevo?",
        answer: "Sí, pero hay un período de espera obligatorio. El reingreso no es automático y requiere la participación en un nuevo proceso de selección.",
        details: [{
            icon: '⏳',
            category: 'Categoría Principal: Reingreso',
            points: [
                "Período de Espera: Es necesario esperar un mínimo de 12 meses después de la fecha de baja para solicitar un nuevo proceso de selección.",
                "Nueva Matrícula: Si se aprueba, el reingreso se considera una nueva matrícula, sin transferencia automática de créditos."
            ]
        }],
        legalBasis: "Art. 80 (Período de Espera), Art. 112 (Reingreso como Nueva Matrícula)",
        documentation: "La misma documentación requerida en la convocatoria de selección para nuevos candidatos.",
        deadlines: "Período mínimo de espera de 12 meses. El candidato compite normalmente en el nuevo proceso de selección."
    },
    {
        topic: "INGRESO Y ADMISIÓN",
        subtopic: "Estudiante Especial",
        question: "¿Qué es un 'Estudiante Especial' y cómo funciona?",
        answer: "Un Estudiante Especial es aquel que toma cursos individuales en el programa sin una matrícula regular. Es una excelente manera de conocer el programa o adelantar créditos.",
        details: [{
            icon: '🧑‍🏫',
            category: 'Categoría Principal: Participación sin Grado',
            points: [
                "Derechos: Puede asistir a clases y recibir un certificado de finalización del curso.",
                "Limitaciones: No tiene supervisor, no puede recibir una beca y no tiene los mismos derechos que un estudiante regular.",
                "Transferencia de Créditos: Los créditos obtenidos en los últimos 5 años pueden transferirse si el estudiante se inscribe más tarde como estudiante regular."
            ]
        }],
        legalBasis: "Art. 75 (Definición), Art. 76 (Reglas de Aceptación), Arts. 77 y 78 (Posibilidad para estudiantes de grado e investigadores)",
        documentation: "Generalmente, un diploma de grado, expediente académico, CV y una carta de interés.",
        deadlines: "Inscripción según el calendario académico. La aceptación es aprobada por el Comité."
    },
    {
        topic: "ESTRUCTURA Y GOBERNANZA",
        subtopic: "Responsabilidades del Comité",
        question: "¿Cuáles son las principales responsabilidades del Comité?",
        answer: "El Comité es el máximo órgano deliberativo del programa. Define y aprueba todas las reglas académicas, pedagógicas y administrativas, siendo la principal instancia para apelar las decisiones tomadas por la Coordinación.",
        details: [{
            icon: '🏛️',
            category: 'Competencias Principales',
            points: [
                "Proponer y aprobar cambios en los reglamentos del programa.",
                "Definir el número de vacantes y aprobar las convocatorias de selección.",
                "Deliberar sobre transferencias de créditos, traslados, licencias y bajas.",
                "Nombrar supervisores, co-supervisores y aprobar los comités de examen (tribunales).",
                "Aprobar el calendario académico y la oferta de cursos para cada período."
            ]
        }],
        legalBasis: "Art. 30, 31, 32",
        documentation: "Actas de las reuniones del Comité.",
        deadlines: "Las decisiones se toman en reuniones regulares (al menos una vez al mes) o extraordinarias."
    },
    {
        topic: "ESTRUCTURA Y GOBERNANZA",
        subtopic: "Responsabilidades de la Coordinación",
        question: "¿Cuáles son las funciones de la Coordinación del Programa?",
        answer: "La Coordinación es el órgano ejecutivo que gestiona las operaciones diarias del programa. Implementa las decisiones del Comité, representa al programa y garantiza el cumplimiento de todas las reglas y plazos.",
        details: [{
            icon: '🧑‍💼',
            category: 'Funciones Principales',
            points: [
                "Presidir las reuniones del Comité y ejecutar sus decisiones.",
                "Preparar y enviar informes a la CAPES (Plataforma Sucupira).",
                "Gestionar la asignación de recursos financieros (como el PROAP).",
                "Organizar el calendario académico y supervisar la finalización de las actividades.",
                "Tomar decisiones urgentes 'ad referendum', que deben ser ratificadas por el Comité en la siguiente reunión."
            ]
        }],
        legalBasis: "Art. 33, 34, 35",
        documentation: "Informes anuales, planes de aplicación de recursos, convocatorias.",
        deadlines: "Responsable de cumplir los plazos establecidos por la CAPES y la UEPB."
    },
    {
        topic: "ESTRUCTURA Y GOBERNANZA",
        subtopic: "Responsabilidades de la Secretaría",
        question: "¿Cuál es el papel de la Secretaría del Programa?",
        answer: "La Secretaría es el órgano de apoyo administrativo que se encarga de las funciones burocráticas y de control académico. Es el principal punto de contacto para estudiantes y profesores en asuntos documentales y de rutina.",
        details: [{
            icon: '🗗',
            category: 'Tareas Principales',
            points: [
                "Organizar y procesar solicitudes, matrículas y otras peticiones.",
                "Mantener actualizados los archivos, registros e historiales académicos de estudiantes y profesores.",
                "Proporcionar apoyo de secretaría para reuniones del Comité, defensas y exámenes de calificación.",
                "Gestionar el flujo de correspondencia y documentos oficiales del programa."
            ]
        }],
        legalBasis: "Art. 36, 37",
        documentation: "Procesos de matrícula, expedientes académicos, archivos de trabajos finales.",
        deadlines: "Trabajo continuo para garantizar un funcionamiento administrativo fluido."
    },
    {
        topic: "PROFESORADO",
        subtopic: "Acreditación y Categorías",
        question: "¿Cómo se convierte un profesor en parte del profesorado del programa?",
        answer: "Un profesor o investigador con un título de doctor puede ser autorizado a participar en el programa (acreditado) en una de tres categorías: Permanente, Visitante o Colaborador, tras la aprobación del Comité.",
        details: [{
            icon: '🧑‍🏫',
            category: 'Categorías de Profesorado',
            points: [
                "Permanente: El núcleo del programa, con participación continua en docencia, investigación y supervisión.",
                "Visitante: Un profesor externo contratado por un período determinado para colaborar con el programa.",
                "Colaborador: Participa de manera complementaria en proyectos, clases o supervisiones, sin los mismos vínculos que un miembro del profesorado permanente."
            ]
        }],
        legalBasis: "Art. 43, 44, 45, 46, 49",
        documentation: "Convocatoria de acreditación, CV Lattes, proyecto de investigación.",
        deadlines: "La acreditación se realiza periódicamente, según las convocatorias publicadas por el programa."
    },
    {
        topic: "PROFESORADO",
        subtopic: "Deberes del Supervisor",
        question: "¿Cuáles son las principales responsabilidades de mi supervisor?",
        answer: "El supervisor es responsable de guiar al estudiante a lo largo de su trayectoria académica, desde la planificación de los estudios y la elección de cursos hasta la preparación y defensa del trabajo final.",
        details: [{
            icon: '🧭',
            category: 'Responsabilidades Principales',
            points: [
                "Asistir al estudiante en la planificación académica y la matrícula.",
                "Monitorear y evaluar el desempeño del estudiante.",
                "Ayudar en la preparación del proyecto y el trabajo final.",
                "Proponer la baja del estudiante en caso de incumplimiento de las actividades.",
                "Sugerir nombres para los comités y autorizar la defensa del trabajo final."
            ]
        }],
        legalBasis: "Art. 69",
        documentation: "Informes de desempeño, dictámenes sobre solicitudes de los estudiantes.",
        deadlines: "Monitoreo continuo durante todo el curso del estudiante."
    },
    {
        topic: "ASUNTOS FINANCIEROS",
        subtopic: "Becas",
        question: "¿Cómo se otorgan las becas?",
        answer: "Las becas no son automáticas y dependen de la disponibilidad de cuotas de las agencias de financiación (como la CAPES). La selección se basa en el mérito académico.",
        details: [{
            icon: '💰',
            category: 'Categoría Principal: Financiación y Ayuda',
            points: [
                "Comité de Becas: Cada programa tiene un comité responsable de definir los criterios de selección y monitorear a los becarios.",
                "Criterios de Selección: Priorizan el mérito académico, generalmente basado en la clasificación en el proceso de selección.",
                "Renovación: La beca se otorga por 12 meses, renovable anualmente hasta el límite del curso, sujeto a un buen desempeño."
            ]
        }],
        legalBasis: "Art. 167 (Comité de Becas), Art. 168 (Requisitos), Art. 169 (Renovación)",
        documentation: "Documentos que prueben la ausencia de una relación laboral remunerada, término de compromiso de la agencia de financiación.",
        deadlines: "La selección es realizada por el Comité de Becas después de los resultados del proceso de selección de admisión."
    },
    {
        topic: "ASUNTOS FINANCIEROS",
        subtopic: "Dedicación a Tiempo Completo",
        question: "¿Puedo trabajar y recibir una beca al mismo tiempo?",
        answer: "No. La beca requiere dedicación a tiempo completo a las actividades del programa.",
        details: [{
            icon: '🚫',
            category: 'Categoría Principal: Prohibiciones y Reglas',
            points: [
                "Dedicación a Tiempo Completo: El becario debe dedicarse por completo al curso, lo que impide acumularlo con actividades profesionales remuneradas.",
                "Excepciones: La propia agencia de financiación puede prever excepciones específicas en sus reglamentos.",
                "Consecuencias: El incumplimiento conduce a la cancelación de la beca y a la obligación de reembolsar los montos recibidos."
            ]
        }],
        legalBasis: "Art. 168, incisos II y IV (Requisito de Dedicación a Tiempo Completo)",
        documentation: "Declaración de no acumulación de becas y ausencia de empleo.",
        deadlines: "El estudiante es responsable de mantener su estado de dedicación a tiempo completo e informar a la coordinación de cualquier cambio."
    },
    {
        topic: "VIDA ACADÉMICA",
        subtopic: "Créditos Mínimos",
        question: "¿Cuántos créditos necesito para completar el curso?",
        answer: "El programa requiere un número mínimo de créditos en cursos, que deben completarse dentro del plazo del curso.",
        details: [{
            icon: '📊',
            category: 'Categoría Principal: Estructura Curricular',
            points: [
                "Maestría: Mínimo de 18 créditos.",
                "Doctorado: Mínimo de 27 créditos.",
                "Definición de Crédito: 1 crédito = 15h de clase teórica o 30h de clase práctica.",
                "Nota: Los créditos de la tesina/tesis no cuentan para este total."
            ]
        }],
        legalBasis: "Art. 115 (Límites Mínimos de Créditos)",
        documentation: "El control se realiza a través del expediente académico.",
        deadlines: "Los créditos deben completarse dentro de la duración máxima del curso. El estudiante y el supervisor son responsables de la planificación."
    },
    {
        topic: "VIDA ACADÉMICA",
        subtopic: "Evaluación y Aprobación",
        question: "¿Cómo funciona la evaluación en los cursos?",
        answer: "Aprobar un curso depende de una calificación y asistencia mínimas.",
        details: [{
            icon: '✅',
            category: 'Categoría Principal: Rendimiento Académico',
            points: [
                "Calificación Mínima: Para aprobar se requiere una calificación de 7.0 o superior (Concepto C).",
                "Asistencia Mínima: Es obligatoria la asistencia de al menos el 75% de las clases.",
                "Promedio General (GPA): Mantener un GPA superior a 7.0 es una condición para permanecer en el programa."
            ]
        }],
        legalBasis: "Art. 125 (Sistema de Calificación), Art. 126 (Asistencia Mínima), Art. 110, inciso VI (Baja por bajo GPA)",
        documentation: "N/A",
        deadlines: "El profesor tiene hasta 30 días después del final del curso para publicar las calificaciones. Reprobar el mismo curso dos veces o tener un GPA < 7.0 conduce a la baja."
    },
    {
        topic: "VIDA ACADÉMICA",
        subtopic: "Prácticas de Docencia",
        question: "¿Son obligatorias las Prácticas de Docencia?",
        answer: "Sí, las prácticas de docencia son una actividad académica obligatoria para los becarios, con el objetivo de formarse para la enseñanza superior. Los estudiantes que ya son profesores pueden solicitar una exención.",
        details: [{
            icon: '👨‍🏫',
            category: 'Detalles de las Prácticas',
            points: [
                "Es obligatorio para los estudiantes becarios.",
                "Los estudiantes de maestría deben completarlo durante un semestre; los de doctorado durante dos semestres.",
                "Las actividades son supervisadas por el supervisor y un profesor de grado.",
                "Al final, el estudiante debe preparar un informe para obtener los créditos."
            ]
        }],
        legalBasis: "Art. 118",
        documentation: "Informe de actividades de las prácticas.",
        deadlines: "Debe completarse dentro de la duración regular del curso."
    },
    {
        topic: "VIDA ACADÉMICA",
        subtopic: "Transferencia de Créditos",
        question: "¿Puedo transferir créditos de otros cursos de posgrado?",
        answer: "Sí, el Comité puede aceptar créditos de cursos tomados en otros programas de posgrado (stricto o lato sensu), siempre que se hayan completado en los últimos 5 años y sean relevantes para su formación.",
        details: [{
            icon: '📚',
            category: 'Reglas para la Transferencia de Créditos',
            points: [
                "El curso debe haberse completado hace no más de 5 años.",
                "La calificación obtenida debe ser de 7.0 o superior (o concepto C).",
                "El número máximo de créditos a transferir se define en los reglamentos de cada programa.",
                "Se debe presentar una solicitud con el expediente académico y los programas de los cursos."
            ]
        }],
        legalBasis: "Art. 129, Art. 130",
        documentation: "Solicitud formal, expediente académico y programas de los cursos tomados.",
        deadlines: "La solicitud debe presentarse formalmente a la coordinación del programa."
    },
    {
        topic: "PLAZOS Y SITUACIONES ESPECIALES",
        subtopic: "Plazos del Curso",
        question: "¿Cuál es el tiempo máximo para completar la maestría/doctorado?",
        answer: "Los reglamentos establecen plazos mínimos y máximos para completar el curso, contados desde la fecha de la primera matrícula.",
        details: [{
            icon: '⏳',
            category: 'Categoría Principal: Plazos Reglamentarios',
            points: [
                "Maestría: Mínimo de 1 año y máximo de 2 años y 6 meses (30 meses).",
                "Doctorado: Mínimo de 2 años y máximo de 5 años (60 meses).",
                "Prórroga: En casos excepcionales, el Comité puede conceder una prórroga de hasta 6 meses (maestría) o 12 meses (doctorado)."
            ]
        }],
        legalBasis: "Art. 113 (Plazos), Art. 114 (Prórroga)",
        documentation: "Para la prórroga: Solicitud formal, justificación, dictamen del supervisor, versión preliminar del trabajo, cronograma.",
        deadlines: "La solicitud de prórroga debe realizarse ANTES de que expire el plazo regular. La decisión depende del Comité."
    },
    {
        topic: "SUPERVISIÓN",
        subtopic: "Asignación y Cambio de Supervisor",
        question: "¿Cómo funciona la asignación y el cambio de supervisor?",
        answer: "Todo estudiante tiene derecho a un supervisor, que es nombrado formalmente por el Comité. Un cambio es posible, pero es un proceso que requiere acuerdo y aprobación.",
        details: [{
            icon: '🤝',
            category: 'Categoría Principal: Relación Supervisor-Estudiante',
            points: [
                "Asignación: Nombrado por el Comité, basado en la indicación del estudiante y la alineación de la investigación.",
                "Cambio por parte del Estudiante: El estudiante puede solicitar un cambio, con el consentimiento del supervisor actual y del nuevo.",
                "Conflicto: En caso de desacuerdo, la decisión final sobre el cambio recae en el Comité."
            ]
        }],
        legalBasis: "Art. 65 (Asignación), Art. 66 (Cambio por el Estudiante), Art. 32, inciso XXI (Autoridad del Comité)",
        documentation: "Para el cambio: Solicitud formal, justificación, cartas de consentimiento/aceptación.",
        deadlines: "El Comité tiene hasta 30 días para nombrar a un nuevo supervisor en caso de vacante."
    },
    {
        topic: "SUPERVISIÓN",
        subtopic: "Asignación y Cambio de Supervisor",
        question: "¿Puede un supervisor dejar de supervisarme?",
        answer: "Sí, un supervisor puede solicitar al Comité el derecho a renunciar a la supervisión de un estudiante. Esto debe hacerse a través de una justificación formal y detallada, basada en los informes de desempeño del estudiante.",
        details: [{
            icon: '👋',
            category: 'Renuncia a la Supervisión',
            points: [
                "Derecho del Supervisor: Los supervisores tienen derecho a renunciar a la supervisión.",
                "Justificación: La solicitud debe ser formal y bien fundamentada.",
                "Aprobación: La solicitud debe ser presentada y aprobada por el Comité del programa.",
                "Nuevo Supervisor: Si se aprueba, el Comité nombrará a un nuevo supervisor en un plazo de 30 días."
            ]
        }],
        legalBasis: "Art. 67 (Renuncia por el Supervisor), Art. 68 (Tutela de la Coordinación)",
        documentation: "Justificación formal del supervisor.",
        deadlines: "La decisión final la toma el Comité."
    },
    {
        topic: "DEFENSA Y TITULACIÓN",
        subtopic: "Examen de Calificación",
        question: "¿Qué es el Examen de Calificación?",
        answer: "El examen de calificación (o pre-defensa) es un paso obligatorio para el doctorado que evalúa la capacidad del estudiante para llevar a cabo una investigación original. Es un hito importante que precede a la defensa final de la tesis.",
        details: [{
            icon: '🧐',
            category: 'Proceso de Calificación',
            points: [
                "Objetivo: Evaluar la madurez de la investigación y la capacidad del estudiante.",
                "Obligatorio: Es obligatorio para el Doctorado y puede ser requerido para la Maestría, según el reglamento del programa.",
                "Comité: Compuesto por al menos tres doctores, aprobado por el Comité.",
                "Resultado: El estudiante puede ser 'Aprobado' o 'Reprobado'. En caso de reprobación, solo hay una oportunidad para repetir el examen."
            ]
        }],
        legalBasis: "Art. 147, 148, 149, 150",
        documentation: "Versión del trabajo para el comité, solicitud de programación.",
        deadlines: "El plazo para el segundo intento es de hasta 120 días (Doctorado) o 60 días (Maestría) después del primero."
    },
    {
        topic: "DEFENSA Y TITULACIÓN",
        subtopic: "Requisitos de Defensa",
        question: "¿Qué necesito hacer para poder defender mi tesina/tesis?",
        answer: "Para programar la defensa, se deben cumplir una serie de requisitos académicos y administrativos, que forman una lista de verificación obligatoria.",
        details: [{
            icon: '🏁',
            category: 'Categoría Principal: Finalización del Curso',
            points: [
                "Lista de Verificación: Créditos completados, examen de calificación aprobado, suficiencia en un idioma extranjero, prácticas de docencia completadas, declaración de no plagio y recomendación del supervisor."
            ]
        }],
        legalBasis: "Art. 151 (Requisitos de Defensa)",
        documentation: "Solicitud de programación, autorización del supervisor, versión del trabajo para el comité, sugerencia de nombres para el comité, prueba de todos los requisitos.",
        deadlines: "El Comité tiene hasta 30 días para aprobar el comité, y la defensa debe programarse dentro de los 30 días posteriores a la aprobación."
    },
    {
        topic: "DEFENSA Y TITULACIÓN",
        subtopic: "Comité y Resultados",
        question: "¿Cómo funciona el comité de defensa y cuáles son los posibles resultados?",
        answer: "La defensa es una sesión pública juzgada por un comité de expertos. El resultado puede ser aprobación, aprobación con correcciones o reprobación.",
        details: [{
            icon: '🧑‍⚖️',
            category: 'Categoría Principal: Comité de Examen',
            points: [
                "Composición (Maestría): Supervisor + 2 expertos (1 externo).",
                "Composición (Doctorado): Supervisor + 4 expertos (2 externos, 1 de otra institución).",
                "Resultados: Aprobado, Insuficiente (con un plazo para correcciones), Reprobado (conduce a la baja)."
            ]
        }],
        legalBasis: "Art. 156 (Composición del Comité), Art. 157 (Resultados)",
        documentation: "Acta de la sesión de defensa pública.",
        deadlines: "Plazo para correcciones (si es 'Insuficiente'): 90 días (Maestría) o 180 días (Doctorado)."
    },
    {
        topic: "DEFENSA Y TITULACIÓN",
        subtopic: "Emisión del Diploma",
        question: "¡Aprobé! ¿Cómo solicito mi diploma?",
        answer: "Después de la aprobación y de hacer las correcciones, debe depositar la versión final del trabajo en el repositorio de la UEPB y luego solicitar formalmente la emisión del diploma.",
        details: [{
            icon: '📜',
            category: 'Categoría Principal: Emisión del Diploma',
            points: [
                "Depósito Final: La versión final corregida (PDF/A con ficha catalográfica) debe depositarse en el Repositorio Institucional dentro de los 30 días de la defensa.",
                "Solicitud de Diploma: El proceso lo inicia el estudiante con el PRPGP, con toda la documentación de respaldo."
            ]
        }],
        legalBasis: "Art. 159 (Depósito Final), Art. 162 (Requisitos para la Concesión), Art. 163 (Documentación para la Emisión)",
        documentation: "Formulario de solicitud estándar, Acta de la defensa, Copia del diploma anterior, Documentos personales, Comprobante de depósito, Declaración de estar al corriente con la biblioteca, Declaración y expediente de finalización.",
        deadlines: "Plazo de Depósito: 30 días después de la defensa (prorrogable por otros 15). La emisión del diploma es responsabilidad del PRPGP."
    },
    {
        topic: "DERECHOS Y GOBERNANZA",
        subtopic: "Propiedad Intelectual",
        question: "¿Quién es el dueño de mi investigación? ¿Puedo solicitar confidencialidad?",
        answer: "Los resultados de la investigación son propiedad de la UEPB, pero los derechos de autor están protegidos. Sí, puede y debe solicitar confidencialidad si planea publicar o patentar.",
        details: [{
            icon: '💡',
            category: 'Categoría Principal: Propiedad Intelectual',
            points: [
                "Propiedad: Los resultados pertenecen a la UEPB, pero cualquier difusión siempre debe mencionar a la universidad, al supervisor y al estudiante.",
                "Confidencialidad: Tiene derecho a solicitar un período de confidencialidad de hasta 1 año para la difusión de su trabajo en el repositorio.",
                "Proceso: La solicitud de confidencialidad se realiza en el momento del depósito final del trabajo."
            ]
        }],
        legalBasis: "Art. 187 (Difusión y Confidencialidad), Art. 188 (Propiedad de los Resultados)",
        documentation: "Formulario de autorización de depósito, con la opción de embargo/confidencialidad marcada.",
        deadlines: "Período de Confidencialidad: Hasta 1 año, puede extenderse. La solicitud se realiza en el momento del depósito."
    },
    {
        topic: "DERECHOS Y GOBERNANZA",
        subtopic: "Reglas de Transición",
        question: "¿Cómo funcionan las reglas de transición para el nuevo reglamento?",
        answer: "Para los estudiantes que ingresaron hasta el segundo período académico de 2023, se aplican las disposiciones del reglamento anterior. Esta nueva resolución se aplica a los que ingresen después de su publicación.",
        details: [{
            icon: '📜',
            category: 'Categoría Principal: Reglas Aplicables',
            points: [
                "Marco Temporal: La fecha de ingreso al curso determina qué reglamento se aplica al estudiante.",
                "Regla Anterior: Los estudiantes que ingresaron hasta 2023.2 siguen el reglamento antiguo.",
                "Regla Nueva: Los estudiantes que ingresen después de la publicación de esta resolución siguen las nuevas reglas."
            ]
        }],
        legalBasis: "Art. 189",
        documentation: "No se aplica documentación específica; la regla se aplica automáticamente por la secretaría.",
        deadlines: "La regla de transición es permanente para las cohortes especificadas."
    },
    {
        topic: "PLAZOS Y SITUACIONES ESPECIALES",
        subtopic: "Licencia General y Ausencia",
        question: "¿Puedo tomar un descanso del curso por un tiempo?",
        answer: "Sí, es posible solicitar una 'Interrupción de Estudios' (licencia general) por razones de enfermedad comprobada o licencia de maternidad. El período de licencia no se cuenta en el tiempo total para la finalización del curso.",
        keywords: ["licencia", "interrupción", "licencia de maternidad", "enfermedad", "ausencia", "descanso", "suspender", "embarazada", "salud", "certificado médico"],
        details: [{
            icon: '⏸️',
            category: 'Categoría Principal: Interrupción de Estudios',
            points: [
                "Razones Aceptadas: Viaje de trabajo, enfermedad comprobada o licencia de maternidad.",
                "Duraciones de la Licencia: Maestría (1 período académico), Doctorado (hasta 2 períodos académicos).",
                "Efecto: El período de licencia no cuenta para la duración total del curso.",
                "Beca: La beca se suspende durante la interrupción, excepto en el caso de licencia de maternidad.",
                "Licencia de Maternidad: La estudiante de posgrado tiene derecho a 180 días de licencia, que no suspenden la beca y no cuentan para el plazo del curso."
            ]
        }],
        legalBasis: "Art. 107 de la Resolución/UEPB/CONSEPE/008/2023",
        documentation: "Solicitud formal con justificación comprobada (certificado médico, etc.), opinión del supervisor y aprobación del Comité.",
        deadlines: "La solicitud debe hacerse antes o durante el período que se va a tomar libre."
    },
    {
        topic: "SITUACIONES PROBLEMÁTICAS",
        subtopic: "Baja Académica",
        question: "¿En qué situaciones un estudiante puede ser dado de baja del programa?",
        answer: "La baja es la terminación de la relación del estudiante con el programa y ocurre automáticamente en casos de rendimiento académico insuficiente, incumplimiento de plazos o infracciones graves, como el plagio.",
        keywords: ["baja", "expulsión", "reprobación", "plazo vencido", "abandono", "plagio", "bajo GPA", "perder la plaza"],
        details: [{
            icon: '❌',
            category: 'Categoría Principal: Causas de Baja',
            points: [
                "Reprobar el mismo curso obligatorio dos veces.",
                "No aprobar los exámenes de suficiencia dentro del plazo.",
                "No matricularse para el semestre a tiempo.",
                "Reprobar el examen de calificación o pre-defensa dos veces.",
                "Exceder el tiempo máximo para la finalización del curso, incluidas las prórrogas.",
                "Tener un Promedio General (GPA) por debajo de 7.0.",
                "Reprobar la defensa final de la tesina o tesis.",
                "Plagio comprobado en cualquier trabajo académico."
            ]
        }],
        legalBasis: "Art. 110 y Art. 111 de la Resolución/UEPB/CONSEPE/008/2023",
        documentation: "El proceso es administrativo, iniciado por la Coordinación, garantizando al estudiante el derecho a una defensa completa y a apelar ante el Comité.",
        deadlines: "La baja se hace efectiva después de la notificación oficial o la publicación de la decisión del Comité."
    },
    {
        topic: "PLAZOS Y SITUACIONES ESPECIALES",
        subtopic: "Licencia General y Ausencia",
        question: "¿Cómo funciona la licencia de maternidad en los estudios de posgrado?",
        answer: "Una estudiante de posgrado tiene derecho a 180 días de licencia de maternidad. Este período no se deduce del tiempo total para la finalización del curso y, para las estudiantes becadas, la beca no se suspende durante la licencia.",
        keywords: ["licencia de maternidad", "madre", "embarazada", "parto", "adopción", "licencia", "bebé", "hijo", "beca", "plazo"],
        details: [{
            icon: '🤱',
            category: 'Categoría Principal: Derechos de las Estudiantes de Posgrado',
            points: [
                "Duración de la Licencia: 180 días.",
                "Cálculo del Plazo: El período de licencia NO se cuenta en el tiempo máximo para la defensa de la tesina o tesis.",
                "Beca: La beca se mantiene íntegramente durante la licencia, siendo una excepción a la regla de suspensión por ausencia.",
                "Actividades en Casa: Una estudiante embarazada también tiene derecho a un régimen de actividades en casa a partir del octavo mes de embarazo, con una duración de 4 meses."
            ]
        }],
        legalBasis: "Art. 41 (§ 2), Art. 107 (§§ 6 y 7), y Art. 108 (I) de la Resolución/UEPB/CONSEPE/008/2023",
        documentation: "Certificado médico o partida de nacimiento para formalizar la solicitud ante la coordinación del programa.",
        deadlines: "La solicitud debe hacerse formalmente a la coordinación del programa para garantizar que se respeten los plazos y el mantenimiento de la beca."
    },
    {
        topic: "DERECHOS Y GOBERNANZA",
        subtopic: "Transferencia Directa Maestría-Doctorado",
        question: "¿Es posible pasar de una maestría a un doctorado directamente (fast track)?",
        answer: "Sí, los programas pueden permitir que los estudiantes se transfieran de una maestría a un doctorado sin un nuevo proceso de selección pública, siempre que se cumplan criterios de excelencia.",
        details: [{
            icon: '🚀',
            category: 'Categoría Principal: Movilidad Académica Avanzada',
            points: [
                "Condición: Los reglamentos del programa deben prever y detallar esta posibilidad.",
                "Criterios: El estudiante debe demostrar un rendimiento excepcional, una producción académica calificada y tener un plan de trabajo consistente para el doctorado.",
                "Evaluación: La transferencia depende de una evaluación rigurosa por parte de un comité designado por el Comité."
            ]
        }],
        legalBasis: "Art. 104",
        documentation: "Solicitud formal, expediente académico, CV Lattes actualizado, producción científica, plan de trabajo doctoral, carta de recomendación del supervisor.",
        deadlines: "La solicitud debe hacerse dentro de un plazo definido por los reglamentos del programa, generalmente después de la calificación de la maestría."
    },
    {
        topic: "DERECHOS Y GOBERNANZA",
        subtopic: "Deberes del Estudiante",
        question: "¿Cuáles son los principales deberes de un estudiante de posgrado?",
        answer: "Además de respetar las reglas de la UEPB, el estudiante debe seguir el plan de estudios, mantener informado al supervisor, participar en las actividades, completar las prácticas de docencia y presentar proyectos al Comité de Ética cuando sea necesario.",
        details: [{
            icon: '📋',
            category: 'Categoría Principal: Responsabilidades Académicas',
            points: [
                "Preservar el nombre de la institución y cumplir con los reglamentos.",
                "Mantener actualizados sus datos de registro y curriculares.",
                "Dedicarse a las actividades del curso y cumplir con los plazos.",
                "Completar las Prácticas de Docencia (obligatorias para los becarios).",
                "Observar las directrices del Comité de Ética en Investigación."
            ]
        }],
        legalBasis: "Art. 74",
        documentation: "Prueba de presentación al Comité de Ética, informes de prácticas de docencia, etc., según lo requiera el programa.",
        deadlines: "Los deberes deben cumplirse a lo largo de todo el curso."
    },
    {
        topic: "DERECHOS Y GOBERNANZA",
        subtopic: "Representación Estudiantil",
        question: "¿Cómo funciona la representación estudiantil en el Comité?",
        answer: "Los estudiantes tienen derecho a representación en el Comité del programa, con derecho a voz y voto, asegurando su participación en las decisiones. El mandato es de 1 año, con una reelección permitida.",
        details: [{
            icon: '🗣️',
            category: 'Categoría Principal: Gobernanza y Participación',
            points: [
                "Composición: El Comité incluye representantes estudiantiles, elegidos por sus pares.",
                "Mandato: El mandato del representante estudiantil es de 1 (un) año.",
                "Reelección: Se permite una reelección para un segundo mandato.",
                "Voz y Voto: Los representantes participan activamente en las reuniones y deliberaciones."
            ]
        }],
        legalBasis: "Art. 31, inciso III y §3",
        documentation: "La elección es organizada por los propios estudiantes y formalizada con la coordinación del programa.",
        deadlines: "El mandato es de 1 año, con elecciones periódicas para elegir a los representantes."
    },
    {
        topic: "REQUISITOS DE FINALIZACIÓN",
        subtopic: "Criterios de Finalización",
        question: "¿Cuáles son los requisitos obligatorios para completar la Maestría en Ciencias Farmacéuticas?",
        answer: "Para completar la Maestría en el PPGCF/UEPB, el estudiante debe cumplir con criterios específicos de plazo, suficiencia de idioma y producción científica, que varían según su situación de beca.",
        details: [{
            icon: '🎯',
            category: 'Categoría Principal: Requisitos de Finalización',
            points: [
                "Plazo: Duración máxima de 24 meses, con una posible prórroga de hasta 6 meses previa aprobación del comité.",
                "Suficiencia: Aprobación en un Examen de Suficiencia en Lengua Inglesa de una institución pública reconocida.",
                "Producción Científica (sin beca): Mínimo de 1 producto enviado (artículo Qualis A, patente o capítulo de libro).",
                "Producción Científica (con beca): Mínimo de 2 productos enviados o 1 aceptado (artículo Qualis A, patente o capítulo de libro).",
                "Nota: El estudiante debe ser el primer autor de los artículos enviados."
            ]
        }],
        legalBasis: "Reglamento Interno del PPGCF",
        documentation: "Comprobante de suficiencia, comprobantes de envío/aceptación de productos científicos.",
        deadlines: "Plazo máximo de 24 meses para la finalización, con la posibilidad de una prórroga de 6 meses."
    }
];

// Quick access cards data (Spanish Version)
const quickAccessCards_es = [
    { icon: 'fas fa-user-plus', title: 'Ingreso', description: 'Proceso selectivo, matrícula y admisión', topic: 'INGRESO Y ADMISIÓN' },
    { icon: 'fas fa-graduation-cap', title: 'Vida Académica', description: 'Créditos, asignaturas y evaluaciones', topic: 'VIDA ACADÉMICA' },
    { icon: 'fas fa-money-bill-wave', title: 'Becas', description: 'Ayudas económicas y dedicación', topic: 'ASUNTOS FINANCIEROS' },
    { icon: 'fas fa-chalkboard-teacher', title: 'Supervisión', description: 'Supervisores y relaciones', topic: 'SUPERVISIÓN' },
    { icon: 'fas fa-certificate', title: 'Defensa', description: 'Calificación, defensa y titulación', topic: 'DEFENSA Y TITULACIÓN' },
    { icon: 'fas fa-balance-scale', title: 'Derechos y Gobernanza', description: 'Estructura, funcionamiento y derechos', topic: 'DERECHOS Y GOBERNANZA' },
    { icon: 'fas fa-clock', title: 'Plazos y Situaciones Especiales', description: 'Plazos del curso y casos especiales', topic: 'PLAZOS Y SITUACIONES ESPECIALES' },
    { icon: 'fas fa-exclamation-triangle', title: 'Situaciones Problemáticas', description: 'Baja académica y problemas académicos', topic: 'SITUACIONES PROBLEMÁTICAS' },
    { icon: 'fas fa-users', title: 'Profesorado', description: 'Profesores, supervisores y acreditación', topic: 'PROFESORADO' },
    { icon: 'fas fa-plane-departure', title: 'Apoyo a Eventos', description: 'Ayuda para participación en congresos', topic: 'APOYO A EVENTOS CIENTÍFICOS' },
    { icon: 'fas fa-check-circle', title: 'Requisitos de Finalización', description: 'Criterios para finalizar el curso', topic: 'REQUISITOS DE FINALIZACIÓN' },
    { icon: 'fas fa-hands-helping', title: 'Profesor Voluntario', description: 'Reglas para trabajo voluntario en la UEPB', topic: 'PROFESOR VOLUNTARIO' },
    { icon: 'fas fa-microscope', title: 'Investigación Postdoctoral', description: 'Estancia, reglas y actividades', topic: 'INVESTIGACIÓN POSTDOCTORAL' },
    { icon: 'fas fa-info-circle', title: 'Sobre esta Versión', description: 'Información sobre actualizaciones y mejoras', topic: 'SOBRE' }
];

// Topic icons (Spanish Version)
const topicIcons_es = {
    "INGRESO Y ADMISIÓN": "fas fa-door-open",
    "ESTRUCTURA Y GOBERNANZA": "fas fa-building",
    "PROFESORADO": "fas fa-users",
    "ASUNTOS FINANCIEROS": "fas fa-money-bill-wave",
    "VIDA ACADÉMICA": "fas fa-graduation-cap",
    "PLAZOS Y SITUACIONES ESPECIALES": "fas fa-clock",
    "SUPERVISIÓN": "fas fa-chalkboard-teacher",
    "DEFENSA Y TITULACIÓN": "fas fa-certificate",
    "SITUACIONES PROBLEMÁTICAS": "fas fa-exclamation-triangle",
    "DERECHOS Y GOBERNANZA": "fas fa-balance-scale",
    "APOYO A EVENTOS CIENTÍFICOS": "fas fa-plane-departure",
    "PROFESOR VOLUNTARIO": "fas fa-hands-helping",
    "INVESTIGACIÓN POSTDOCTORAL": "fas fa-microscope",
    "REQUISITOS DE FINALIZACIÓN": "fas fa-check-circle"
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const topicFilter = document.getElementById('topicFilter');
const subtopicFilter = document.getElementById('subtopicFilter');
const faqContainer = document.getElementById('faqContainer');
const noResults = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');
const quickCards = document.getElementById('quickCards');

// State
let currentResults = faqData;
let currentPage = 1;
const itemsPerPage = 10;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateFilters();
    renderQuickAccessCards();
    renderFAQ(faqData);
    updateResultsCount(faqData.length);
    updateHeroStats();

    // Event listeners
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    topicFilter.addEventListener('change', handleFilter);
    subtopicFilter.addEventListener('change', handleFilter);
}

function updateHeroStats() {
    // Contar perguntas totais
    const totalQuestions = faqData.length;

    // Contar categorias únicas (tópicos)
    const uniqueTopics = [...new Set(faqData.map(item => item.topic))].length;

    // Atualizar os elementos no DOM
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 2) {
        statNumbers[0].textContent = totalQuestions;
        statNumbers[1].textContent = uniqueTopics;
    }
}

function populateFilters() {
    // Populate topic filter
    const topics = [...new Set(faqData.map(item => item.topic))].sort();
    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicFilter.appendChild(option);
    });

    // Populate subtopic filter
    const subtopics = [...new Set(faqData.map(item => item.subtopic))].sort();
    subtopics.forEach(subtopic => {
        const option = document.createElement('option');
        option.value = subtopic;
        option.textContent = subtopic;
        subtopicFilter.appendChild(option);
    });
}

function renderQuickAccessCards() {
    quickCards.innerHTML = quickAccessCards.map(card => {
        if (card.subtopic) {
            return `
                <div class="quick-card" onclick="filterByTopicAndSubtopic('${card.topic}', '${card.subtopic}')">
                    <div class="quick-card-icon">
                        <i class="${card.icon}"></i>
                    </div>
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </div>
            `;
        } else {
            return `
                <div class="quick-card" onclick="filterByTopic('${card.topic}')">
                    <div class="quick-card-icon">
                        <i class="${card.icon}"></i>
                    </div>
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </div>
            `;
        }
    }).join('');
}

function renderFAQ(items) {
    if (items.length === 0) {
        faqContainer.innerHTML = '';
        document.getElementById('paginationContainer').style.display = 'none';
        noResults.classList.add('show');
        return;
    }

    noResults.classList.remove('show');

    // Calculate pagination
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    // Render current page items
    faqContainer.innerHTML = currentItems.map((item, index) => {
        const globalIndex = startIndex + index;
        return `
            <div class="faq-item" id="faq-${globalIndex}">
                <div class="faq-header-item" onclick="toggleFAQ(${globalIndex})">
                    <div class="faq-question-content">
                        <div class="faq-question">${item.question}</div>
                        <div class="faq-tags">
                            <span class="faq-tag topic">${item.topic}</span>
                            <span class="faq-tag subtopic">${item.subtopic}</span>
                        </div>
                    </div>
                    <i class="fas fa-chevron-down faq-chevron"></i>
                </div>
                <div class="faq-content">
                    <div class="faq-answer">${item.answer}</div>
                    <div class="faq-details">
                        ${renderDetails(item)}
                        ${renderInfoGrid(item)}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Show/hide pagination
    const paginationContainer = document.getElementById('paginationContainer');
    if (totalPages > 1) {
        paginationContainer.style.display = 'flex';
        renderPagination(totalPages, items.length);
    } else {
        paginationContainer.style.display = 'none';
    }
}

function renderDetails(item) {
    return item.details.map(detail => `
        <div class="detail-section">
            <div class="detail-icon">${detail.icon}</div>
            <div class="detail-category">${detail.category}</div>
            <ul class="detail-points">
                ${detail.points.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderInfoGrid(item) {
    return `
        <div class="info-grid">
            <div class="info-item">
                <i class="fas fa-book info-icon"></i>
                <div class="info-content">
                    <h5>Base Legal <i class="fas fa-external-link-alt legal-link-icon" onclick="openLegalDocument(event, '${item.topic}', '${item.subtopic}')"></i></h5>
                    <p>${item.legalBasis}</p>
                </div>
            </div>
            <div class="info-item">
                <i class="fas fa-file-alt info-icon"></i>
                <div class="info-content">
                    <h5>Documentação</h5>
                    <p>${item.documentation}</p>
                </div>
            </div>
            <div class="info-item">
                <i class="fas fa-clock info-icon"></i>
                <div class="info-content">
                    <h5>Prazos</h5>
                    <p>${item.deadlines}</p>
                </div>
            </div>
        </div>
    `;
}

function toggleFAQ(index) {
    const faqItem = document.getElementById(`faq-${index}`);
    if (faqItem) {
        faqItem.classList.toggle('active');
    }
}

function handleSearch() {
    applyFilters();
}

function handleFilter() {
    applyFilters();
}

// Função para remover acentos
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const searchTermNoAccents = removeAccents(searchTerm);
    const selectedTopic = topicFilter.value;
    const selectedSubtopic = subtopicFilter.value;

    // Show/hide quick access cards based on search or any active filter
    const quickAccessSection = document.querySelector('.quick-access');
    const hasActiveFilters = searchTerm || selectedTopic || selectedSubtopic;

    if (hasActiveFilters) {
        quickAccessSection.classList.add('hidden');
    } else {
        quickAccessSection.classList.remove('hidden');
    }

    let filtered = faqData.filter(item => {
        // Topic filter
        if (selectedTopic && item.topic !== selectedTopic) return false;

        // Subtopic filter
        if (selectedSubtopic && item.subtopic !== selectedSubtopic) return false;

        // Search filter
        if (searchTerm) {
            const searchableText = [
                item.question,
                item.answer,
                item.topic,
                item.subtopic,
                item.legalBasis,
                item.documentation,
                item.deadlines,
                ...item.details.flatMap(d => [d.category, ...d.points])
            ].join(' ').toLowerCase();

            const searchableTextNoAccents = removeAccents(searchableText);

            // Busca tanto com acentos quanto sem acentos
            if (!searchableText.includes(searchTerm) && !searchableTextNoAccents.includes(searchTermNoAccents)) {
                return false;
            }
        }

        return true;
    });

    // Reset to first page when filters change
    currentPage = 1;
    currentResults = filtered;
    renderFAQ(filtered);
    updateResultsCount(filtered.length);

    // Update subtopic filter based on selected topic
    if (selectedTopic) {
        updateSubtopicFilter(selectedTopic);
    } else {
        populateSubtopicFilter();
    }
}

function updateSubtopicFilter(selectedTopic) {
    const relevantSubtopics = [...new Set(
        faqData
            .filter(item => item.topic === selectedTopic)
            .map(item => item.subtopic)
    )].sort();

    const currentValue = subtopicFilter.value;
    subtopicFilter.innerHTML = '<option value="">Todos os Subtópicos</option>';

    relevantSubtopics.forEach(subtopic => {
        const option = document.createElement('option');
        option.value = subtopic;
        option.textContent = subtopic;
        if (subtopic === currentValue) option.selected = true;
        subtopicFilter.appendChild(option);
    });
}

function populateSubtopicFilter() {
    const subtopics = [...new Set(faqData.map(item => item.subtopic))].sort();
    const currentValue = subtopicFilter.value;
    subtopicFilter.innerHTML = '<option value="">Todos os Subtópicos</option>';

    subtopics.forEach(subtopic => {
        const option = document.createElement('option');
        option.value = subtopic;
        option.textContent = subtopic;
        if (subtopic === currentValue) option.selected = true;
        subtopicFilter.appendChild(option);
    });
}

function filterByTopic(topic) {
    topicFilter.value = topic;
    subtopicFilter.value = '';
    searchInput.value = '';
    applyFilters();

    // Mostrar indicador do filtro ativo
    updateActiveFilterIndicator(topic);

    // Scroll to FAQ section
    document.querySelector('.faq-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function filterByTopicAndSubtopic(topic, subtopic) {
    topicFilter.value = topic;
    updateSubtopicFilter(topic);
    subtopicFilter.value = subtopic;
    searchInput.value = '';
    applyFilters();

    // Mostrar indicador do filtro ativo
    updateActiveFilterIndicator(topic + ' - ' + subtopic);

    // Scroll to FAQ section
    document.querySelector('.faq-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function updateResultsCount(count) {
    resultsCount.textContent = `${count} resultado${count !== 1 ? 's' : ''}`;

    // Mostrar ou ocultar botão de reset baseado nos filtros ativos
    const resetBtn = document.getElementById('resetFiltersBtn');
    const hasActiveFilters = searchInput.value.trim() !== '' ||
        topicFilter.value !== '' ||
        subtopicFilter.value !== '';

    if (hasActiveFilters) {
        resetBtn.classList.add('show');
    } else {
        resetBtn.classList.remove('show');
    }
}

function updateActiveFilterIndicator(topic) {
    const indicator = document.getElementById('activeFilterIndicator');

    if (topic) {
        indicator.textContent = topic;
        indicator.classList.add('show');
    } else {
        indicator.classList.remove('show');
    }
}

function resetAllFilters() {
    // Limpar todos os filtros
    searchInput.value = '';
    topicFilter.value = '';
    subtopicFilter.value = '';

    // Restaurar filtro de subtópicos
    populateSubtopicFilter();

    // Ocultar indicador de filtro ativo
    updateActiveFilterIndicator(null);

    // Reset pagination
    currentPage = 1;

    // Mostrar cards de acesso rápido novamente
    const quickAccessSection = document.querySelector('.quick-access');
    quickAccessSection.classList.remove('hidden');

    // Aplicar filtros (que agora estão vazios)
    applyFilters();

    // Scroll suave para o topo da seção FAQ
    document.querySelector('.faq-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function renderPagination(totalPages, totalItems) {
    const paginationContainer = document.getElementById('paginationContainer');
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    
    let paginationHTML = `
        <div class="pagination-info">
            Mostrando ${startItem}-${endItem} de ${totalItems} resultados
        </div>
        <div class="pagination-controls">
    `;

    // Previous button
    if (currentPage > 1) {
        paginationHTML += `
            <button class="pagination-btn" onclick="goToPage(${currentPage - 1})">
                <i class="fas fa-chevron-left"></i>
            </button>
        `;
    }

    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">
                ${i}
            </button>
        `;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }

    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `
            <button class="pagination-btn" onclick="goToPage(${currentPage + 1})">
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
    }

    paginationHTML += `
        </div>
    `;

    paginationContainer.innerHTML = paginationHTML;
}

function goToPage(page) {
    currentPage = page;
    renderFAQ(currentResults);
    
    // Scroll to top of FAQ section
    document.querySelector('.faq-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Function to open legal document
function openLegalDocument(event, topic = null, subtopic = null) {
    event.stopPropagation();
    
    // Links específicos para cada categoria
    const specificLinks = {
        'PROFESSOR VOLUNTÁRIO': 'https://drive.google.com/file/d/1ey0_GAxq3UPcbpv9WbmP8mP_tNkcMrAC/view?usp=drive_link',
        'PÓS-DOUTORADO': 'https://drive.google.com/file/d/1-bojalWMDpKm2a9FSaYKjI6Ac0Q_pEzN/view?usp=sharing'
    };
    
    // Para Estágio de Docência, usar o link específico
    if (subtopic === 'Estágio de Docência') {
        window.open('https://drive.google.com/file/d/1UJKf3oO2h1SO0Vszo--pmeFc-wroD0BX/view?usp=drive_link', '_blank', 'noopener,noreferrer');
        return;
    }
    
    // Usar link específico se disponível, senão usar o geral
    const link = specificLinks[topic] || 'https://drive.google.com/file/d/1JLRNmKDOcBQI3TnAFPxKVXyf7K-UTF7o/view?usp=sharing';
    window.open(link, '_blank', 'noopener,noreferrer');
}

// Back to Top Button functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Version Modal Functions
function openVersionModal() {
    const modal = document.getElementById('versionModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeVersionModal() {
    const modal = document.getElementById('versionModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close version modal if open
        const versionModal = document.getElementById('versionModal');
        if (versionModal.classList.contains('show')) {
            closeVersionModal();
            return;
        }
        
        // Close any open FAQ items
        document.querySelectorAll('.faq-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('versionModal');
    if (e.target === modal) {
        closeVersionModal();
    }
});
