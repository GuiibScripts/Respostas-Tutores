const mensagens = [
  //##################################################
  // CHAT
  //##################################################

  {
    categoria: "Dúvidas sobre Chat",
    nome: "HELP Channel\nConversas e Spans",
    texto: "Por favor, utilize o HELP apenas para dúvidas. Evite o mute desnecessário."
  },
  {
    categoria: "Dúvidas sobre Chat",
    nome: "Problema Lag",
    texto: "Qualquer problema de Lag, Kicks, Rota, por gentileza direcionar diretamente ao sistema de ticket no site. Se houve mortes é onde podem ver se há ou não motivo de compensação. O help é apenas para dúvidas. "
  },
  {
    categoria: "Dúvidas sobre Chat",
    nome: "Anuncio WorldChat\nDirecionar ao Advertsing",
    texto: "Anúncios de Compra / Venda / Troca / Live / Recrutamento de Guilds deverão ser feitos no Advertising"
  },
  {
    categoria: "Dúvidas sobre Chat",
    nome: "Links em Channel",
    texto: "Não é permitido o envio de links externos nos canais oficiais do servidor."
  },
  {
    categoria: "Dúvidas sobre Chat",
    nome: "Vendas em R$\n(PROIBIDO)",
    texto: "O servidor não tolera nenhum tipo de anúncio para compras/vendas RL através dos canais dentro do jogo."
  },


  //##################################################
  // Custom
  //##################################################

  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Stack de Bless",
    texto: "O limite de blesses stackadas são 5."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Obelisk",
    texto: "O Obelisk é um sistema de compensação. Serve pra resetar os CD dos Bosses mortos nos últimos 30min de quem utilizar, só aparece após uma queda ou crash ocasionado pelo server, surge em todos os templos e tem um horário indeterminado."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Emote Spell",
    texto: "Aqui não tem o sistema de Emote Spell. Você pode tirar as spells dos outros nas configurações > interface > game window > desativar o 'show spells of others' e se quiser tirar as suas, desabilitar o 'show spells'."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Comando !FPS",
    texto: "O comando !fps otimiza e reseta o client, pode te ajudar. Caso tenha reclamações sobre mortes, abra um ticket no nosso site. Caso queira apenas desabafar, use o world chat"
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "BOSSES Drop PIX",
    texto: "Os Bosses Ghazbaran, Orshabaal e Morgaroth dropam Ticket de PIX, além do loot que já pode vir normalmente."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Raid Boss",
    texto: "As raids acontecem em dias e horários específicos assim como de forma aleatória. Você pode ver sobre aqui: rubinot.com.br/raids"
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "ROLETA",
    texto: "As Roletas se encontram nos TP nos diversos templos, e no DP de Thais. Lembrando que são dois tipos - https://wiki.rubinot.com/wiki/Roleta"
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "STAMINA",
    texto: "Orange: 3m dormindo, 1 stamina. 6m atacando trainer, 1 stamina, 3m em pz, 1 stamina. | Green: 6m dormindo, 1 stamina. 6m atacando trainer, 1 stamina. 5m em pz, 1 stamina."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Stamina Extencion\n(ITEM)",
    texto: "A Stamina Extension recupera 1 hora de stamina perdida. Seu cooldown de uso é 24 horas."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Tempo Varinhas\n(Excercise Weapons)",
    texto: "Varinhas: VIP: 5k Cargas = 2h30 - 14k  Cargas = 7h - 45k Cargas = 22h30 | Free: 5k Cargas = 2h45 - 14k Cargas = 7h30 - 45k Cargas = 24h45"
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Trainers ONLINE",
    texto: "Os Trainers Online estão na Adventurers Guild no norte do andar principal. Para ficar ativo, basta atacar os trainers. Caso queira sair da room dos Skeleton Target's, ande diagonal sul esquerda. Preys de Atq e Def, imbuiments são consumidos."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Mini Obelisk\n(ITEM)",
    texto: "O Mini Obelisk portátil ao ser utilizado ele some, resetando o CD de todos os bosses. Pode ser utilizado outro logo em seguida."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Linked Tasks\n(Comandos)",
    texto: "Para acompanhar o andamento da sua Task use - !task check - ou habilite o Quest Tracker do '- Task System', pela janela do Quest Log. Para cancelar uma Task digite - !task clear"
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Stone of Ascencion",
    texto: "Aumenta em +2 o tier do item que você usar a Stone. Tem duração de 3h corridas. Uso único."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Grand Stone of Ascencion",
    texto: "Aumenta em +3 o tier do item que você usar a Stone. Tem duração de 3h corridas. Uso único."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Eternal Stone of Ascencion",
    texto: "Aumenta em +2 o tier do item que você usar a Stone. Uso infinito, porém com um cooldown de 3 dias"
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Boosted Excercise",
    texto: "Bate 2x mais rápido. As cargas variam de acordo com a task, mas o Present tem 14400 cargas."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Hunting Points\nEnviar no Privado",
    texto: "Os Hunting Task Points servem como moeda de troca com o NPC Walter Jaeger. Podem ser trocados por diversos itens - https://www.tibiawiki.com.br/wiki/Hunting_Task_Points"
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "LootPouch",
    texto: "A LootPouch irá pegar todo o seu loot. Não precisa ser VIP. Após comprar, selecione ela em todos os slots de categorias de loot que desejar (a indicação é setar em todos) na configuração do Manage Loot Container e dê o comando - !autoloot - para ativá-la."
  },
  {
    categoria: "Dúvidas sobre Sistema Custom",
    nome: "Exercise Present",
    texto: "Ao dar use, você podera escolher dentre umas das armas de treino disponiveis, com 14400 cargas."

  },
  //##################################################
  // QUESTS 
  //##################################################

  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "The Way of the Monk",
    texto: "A quest The Way of the Monk irá fornecer 10 pontos na roda de habilidades para todos os chares de qualquer vocação que terminarem ela."
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "Acesso a Candia",
    texto: "Para começar o acesso, é necessário que tenha completado a missão 'A Dream Come True' da Threatened Dreams Quest. Em seguida, continue o acesso através da missão Sweet Dream da mesma quest."
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "Acesso a Oskayaat",
    texto: "Começar pela missão 'The Enemies of the Pride' da 'Grimvale Quest'. Matar os Minis dos lion, recolher os itens, clicar na estatua perto do tp do Heliodor, conversar com ele e seguir a quest."
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "Acesso Mota -1",
    texto: "Na parte das alavancas, fale hi - bone para o NPC Gareth e logo em seguida vá para a alavanca central do mapa (dê use nela) e logo em seguida vá ligeiramente para a alavanca de osso (dê use) e entre na porta de acesso."
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "Demon Oak Quest",
    texto: "Igual global. Porém, aqui são apenas 666 Demon's e não precisa de rank. Não tem problema se comprar o Holy Icon de outro player, você poderá fazer normalmente."
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "Fox Tail Quest",
    texto: "Para adquirir o Foxtail Amulet, pedir missão pro NPC Daniel Steelsoul, em Edron, matar os 5 bosses e entregar a missão novamente."
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "Inquisition Quest",
    texto: "A inquisition já se inicia na Missão 07: The Shadow Nexus. O item Special Flask (Água sagrada) é obtido no início da quest, na sala de teleports."
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "last GT",
    texto: "Para fazer o boss da Last GT, é necessário matar todos os mini antes. No nosso servidor não temos o sistema de pontuação, após matar os mini uma única vez, o acesso ao Last é liberado para sempre."
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "Taint SoulWar",
    texto: "Pra tirar a taint precisa falar - hi - remove taint - pro NPC Flickering Soul. Aguarde os 14 dias para remover novamente."
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "Threatened Dreams",
    texto: "A quest Threatened Dreams começa já dentro da cidade de Feyrist, na missão A Dream come True. Basta falar com a Maelyrra e pedir mission. Já começa na parte de matar 200 criaturas e o Kroazur"
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "Tibia Droma",
    texto: "Funciona igual ao Global. Do dia 01 ao dia 15 de cada mês."
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "Cancia",
    texto: "Texto"
  },
  {
    categoria: "Dúvidas Quests e Acessos",
    nome: "Cancia",
    texto: "Texto"
  },

  {
    categoria: "Dúvidas Addons e Mounts",
    nome: "Addons",
    texto: "Todos os addons tem que ser feito da maneira tradicional igual ao Global, levando os itens necessários aos NPC's respectivos. Tem que aguardar os horários assim como no Global."
  },
  {
    categoria: "Dúvidas Addons e Mounts",
    nome: "Assassin",
    texto: "Caso não esteja conseguindo entregar os itens da Assassins Outfits Quest, falar 'addon' antes de entregar cada item."
  },
  {
    categoria: "Dúvidas Addons e Mounts",
    nome: "Barbarian Outfits",
    texto: "O Barbarian Outfit começa pelo Addon 2. Após fazer esse Addon, você conseguirá fazer o Addon 1 normalmente."
  },
  {
    categoria: "Dúvidas Addons e Mounts",
    nome: "Dream Warrior Outfit\n(Dream Courts)",
    texto: "Falar hi/talk/story/short/task, pro NPC Vanys."
  },
  {
    categoria: "Dúvidas Addons e Mounts",
    nome: "Giant Beaver (Timira)",
    texto: "Para domar o Giant Beaver é necessário o item Colourful Water Lily, ao qual pode ser adquirido matando o Boss Timira e falando 'hi - mission' com o NPC Nilavarna em Marapur"
  },
  {
    categoria: "Dúvidas Addons e Mounts",
    nome: "Pirate (task itens)",
    texto: "Foi desativada pois ela pode ser feita nas Linked Task dos Pirates, a partir da segunda conclusão você recebera, sempre que concluir, um dos itens aleatoriamente no seu mail."
  },
  {
    categoria: "Dúvidas Addons e Mounts",
    nome: "Tinder Box",
    texto: "Só é possível pegar uma Tinder Box a cada 20 horas."
  },
  {
    categoria: "Dúvidas Addons e Mounts",
    nome: "Ursagrodon Mount",
    texto: "A ilha Chyllfroest está sempre ativa para que possa domar o Ursagrodon."
  },
  {
    categoria: "Dúvidas Addons e Mounts",
    nome: "Warrior",
    texto: "Na Warriors Outfits Quest, falar apenas 'hardened bones' para entregar os bones. A partir daí, entregar normalmente os outros itens."
  },
  {
    categoria: "Dúvidas Addons e Mounts",
    nome: "Wild Horse",
    texto: "Sua aparição acontece na Horse Station World Change, assim como no global. É necessário ocorrer os dois estágios."
  },

  //##################################################
  // BOSSES
  //##################################################

  {
    categoria: "Dúvidas BOSSES",
    nome: "Ancient Spawn of Morgathla",
    texto: "Precisa das três partes: Mallet Handle, Mallet Head, Mallet Pommel e pode ser montado entregando as partes ao NPC Gnominimus, que dropa dos boss da wz456, necessários para montar o Strange Mallet. Usado para 'despertar' o Word Boss Ancient Spawn of Morgathla, tocando o Gongo Dourado na sala secreta (O item irá se quebrar após ser usado no gongo). Nao tem cd, se tiver 2 Strange Mallet pode-se fazer 2 seguidos."
  },
  {
    categoria: "Dúvidas BOSSES",
    nome: "Last DC",
    texto: "No momento está sendo necessario 5 mortes dos mini-bosses, para poder entrar na sala da Last."
  },
  {
    categoria: "Dúvidas BOSSES",
    nome: "Gaz'Haragoth",
    texto: "A invasão do Gaz'Haragoth são nos dias 1 e 15 de cada mês, devendo acompanhar o aviso no Server Log, ele spawna direto na Prison -4"
  },
  {
    categoria: "Dúvidas BOSSES",
    nome: "Grave Danger",
    texto: "Ela começa no NPC Jack Springer, abaixo do NPC da INQ. Após pedir a quest, matar os 5 dukes e reportar."
  },
  {
    categoria: "Dúvidas BOSSES",
    nome: "Jaul CD",
    texto: "Se não abrir o baú, não faz no próximo estágio. Ao abrir o baú e resetar a world change, é possível fazer novamente."
  },
  {
    categoria: "Dúvidas BOSSES",
    nome: "King Zelos",
    texto: "Para ter acesso ao Boss Zelos, precisa fazer a quest Grave Danger. Ela começa no NPC Jack Springer, abaixo do NPC da INQ. Após pedir a quest, matar os 5 dukes e reportar. Além disso, é necessário fazer o acesso à Isle of The Kings."
  },
  {
    categoria: "Dúvidas BOSSES",
    nome: "Last DC",
    texto: "Para ter acesso ao boss da Last DC, é necessário matar 5 mini antes (pode repetir)."
  },
  {
    categoria: "Dúvidas BOSSES",
    nome: "Last GT",
    texto: "Para fazer o boss da Last GT, é necessário matar todos os mini antes."
  },
  {
    categoria: "Dúvidas BOSSES",
    nome: "Não precisam de Acesso",
    texto: "Bosses como Oberon, Drume, Scarlett, Leiden, Urmahlullu não precisam de acesso. Alguns bosses como, por exemplo, Pale Worm, precisam dos mini bosses."
  },
  {
    categoria: "Dúvidas BOSSES",
    nome: "Ratmiral",
    texto: "Para matar o boss Ratmiral, matar o boss Tentugly antes."
  },

  //##################################################
  // CASTELO
  //##################################################

  {
    categoria: "Dúvidas Castelo",
    nome: "Castelo - abertura",
    texto: "O tp do Castelo abre às segundas (OPVP), quartas (NPVP) e domingos (RPVP), às 19:40 e fecha às 19:55 no templo de Thais, TP à direita, vagas limitadas. O evento tem duração de 1hr. Requisitos: lvl 400+. Mais info, rubinot.com.br/castle"
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Castle Coin",
    texto: "As Castle Coin, recebidas no Castelo, ou adquiridas via Market, podem ser vendidas no Market ou utilizadas no NPC Castle Merchant, dentro do Templo de Thais, a esquerda."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Recompensa - Castle Coin",
    texto: "TODOS os jogadores que participarem do evento ganharão 1 Castle Coin como prêmio de participação."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Castelo - mortes",
    texto: "As mortes que ocorrerem dentro do castelo, não irá contar como unjustified kill e não haverá penalidade de morte como: redução de skill, perdade de exp e/ou perda de bless."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Castelo - refill",
    texto: "Na área do lobby de espera e nas bases de ambos os times, haverão NPC's para refill completo de supplys."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Castelo - sem player",
    texto: "Caso o evento não ocorra, os jogadores serão enviados ao templo e o dinheiro retornado ao balance."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Castelo - taxas",
    texto: "As taxas para entrar no evento é baseada conforme seu level. Level 400~599 = 2kk / 600~999 = 3kk / 1000~1199 = 4kk / 1200+ = 5kk"
  },

  //##################################################
  // BAZAR
  //##################################################

  {
    categoria: "Dúvidas Castelo",
    nome: "Quando entra no Bazar",
    texto: "Ao programar a data e adicionar ao leilão. O char entra no próximo SS."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Cancelar Char Bazar",
    texto: "Se você bidou o char de alguém, só se outra pessoa cobrir sua oferta. Se você colocou a venda um char, só é possivel cancelar se não houver nenhum bid nele através do site."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Char com Warning",
    texto: "Char com warning não pode ser vendido pelo bazaar e é uma punição definitiva."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Como Vender Char",
    texto: "Para vender char basta abrir a Store e clicar na parte inferior onde tem um char com uma bag atrás. Certifique-se de cumprir todos os requesitos.xto"
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Definir tempo de venda",
    texto: "Quem define o tempo de leilão é o próprio player, logo, atente-se na definição de data e hora."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Taxa Venda de Char",
    texto: "A taxa pra venda de char no baazar é de 50 coins pra criar a offer de venda + 8% do valor do char quando efetivar a venda."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Ganhando o leilão",
    texto: "Caso ganhe o leilão, o char só irá para sua conta posterior ao término do SS."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Rubini Coins retidas",
    texto: "As suas RC ficarão retidas até o final do leilão. Se você possui 1000 RC e bidou 600 RC em um char, você não conseguirá aumentar mais o bid, pois só terá 400 RC disponíveis."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Taxa de 50 RC",
    texto: "A taxa de 50 RC só é 'reembolsada' caso o player cancele o leilão antes do char entrar no Bazaar."
  },
  {
    categoria: "Dúvidas Castelo",
    nome: "Valor mínimo de bid",
    texto: "Caso o bid minímo não tenha sido alcançado, as coins voltam para quem bidou e o char volta para o dono original."
  },

  //##################################################
  //VIP
  //##################################################

  {
    categoria: "Dúvidas VIP",
    nome: "Bônus com loyalty",
    texto: "Pontos Loyalty é algo diferente do Bônus de Skill que vem com os pontos loyalty. Pra +3 de skill você precisa de 6 loyalty. Tem a tabela toda aqui: https://rubinot.com.br/loyalty"
  },
  {
    categoria: "Dúvidas VIP",
    nome: "Full Loyalty",
    texto: "Você precisa comprar 70 VIP's para desbloquear todos os pontos skill de Loyalty (10 pontos). Não precisa esperar uma VIP acabar para poder comprar outra."
  },
  {
    categoria: "Dúvidas VIP",
    nome: "Loyalty",
    texto: "É acumulativo, você compra 1 mês e ganha 1, depois com 3 meses você ganha 2, depois com 6 meses você ganha 3, 9/4, 15/5, 21/6, 30/7, 42/8, 56/9 e 70/10. Mais infos no site https://rubinot.com.br/loyalty"
  },
  {
    categoria: "Dúvidas VIP",
    nome: "VIP - info",
    texto: "Todas as informações sobre benefícios VIP podem ser checadas neste link: https://rubinot.com.br/loyalty"
  },
  {
    categoria: "Dúvidas VIP",
    nome: "Imbuements",
    texto: "Caso seja VIP, NENHUM imbuement será consumido dentro de área PZ. Porém, se você não for VIP, os imbuements de Boots e Backpack serão consumidos normalmente."
  },


  // Em Constução...
];