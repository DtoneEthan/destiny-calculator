// i18n.js — full zh / en / es translations + content template pools
// Placeholders used in template strings:
//   {loc}    -> birth location (as typed by user)
//   {pron}   -> gendered pronoun (他/她, he/she, él/ella)
//   {age}    -> numeric age (already localized by ageUnit)
const I18N = {
  zh: {
    ui: {
      appTitle: "命运推算",
      appSubtitle: "输入你的出生信息，看看这一生的故事",
      disclaimer: "⚠️ 本工具仅供娱乐，所有推算均为虚构，请勿当真，更不可用于医疗、法律或重大人生决策。",
      lblYear: "出生年份",
      lblMonth: "月份",
      lblDay: "日期",
      lblTime: "出生时间（可不填）",
      lblDontRemember: "不记得",
      lblLocation: "出生地点",
      locationPlaceholder: "例如：广东汕头 / Shanghai / Madrid",
      lblGender: "性别",
      lblMale: "男",
      lblFemale: "女",
      calcBtn: "开始推算",
      resetBtn: "重置",
      formError: "请填写完整的出生年月日与性别。",
      resultTitle: "你的人生轨迹",
      summaryTitle: "命运概览",
      statLifespan: "预期寿命",
      statMarriage: "结婚年龄",
      statFirstChild: "首个孩子",
      statChildren: "子女数量",
      statDeath: "生命终点",
      stagesHeading: "人生四阶段",
      lblYouth: "少年 (0–17)",
      lblYoung: "青年 (18–35)",
      lblMiddle: "中年 (36–55)",
      lblOld: "晚年 (56+)",
      luckHeading: "好运时刻",
      crisisHeading: "危机与化解",
      lblLuck: "好运",
      lblCrisis: "危机",
      childNone: "暂无子女",
      footNote: "命运由心造 · 本结果为程序随机生成，仅供娱乐"
    },
    months: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
    pron: { male: "他", female: "她" },
    ageUnit: (n) => `${n} 岁`,
    seasons: ["隆冬","早春","暮春","初夏","盛夏","初秋","深秋","初冬"],
    t: {
      youth: [
        "少年时期，你在{loc}度过了无忧无虑的时光，{pron}天资聪颖，身边常有良师益友相伴。",
        "童年与少年时代，{pron}性格坚韧，虽偶有波折，却练就了不服输的心性。",
        "在{loc}的少年岁月里，{pron}好奇心旺盛，早早显露出独特的志趣与天赋。",
        "少年时家境平顺，{pron}在爱与自由中长大，养成了温和而坚定的性情。",
        "青春的序章里，{pron}略显内向却内心炽热，暗中积蓄着改变命运的力量。",
        "少年时代{pron}便懂得体贴他人，人缘颇佳，常是朋友圈里被信赖的那一个。"
      ],
      young: [
        "青年时期是你扬帆起航的阶段，{pron}在事业或学业上初露锋芒，并结识了影响一生的人。",
        "二十多岁的你勇于闯荡，{pron}在试错中找到了真正热爱的事，内心愈发笃定。",
        "青年时代{pron}远行或转换环境，视野大开，一步步走出属于自己的路。",
        "刚成年的几年里，{pron}经历了重要的成长仪式，责任感与独立性悄然建立。",
        "青年时期的你外柔内刚，面对竞争不慌不忙，渐渐积累了口碑与人脉。",
        "这段年华{pron}敢爱敢拼，虽有过迷惘，却也在历练中认准了人生方向。"
      ],
      middle: [
        "中年是你人生的黄金期，{pron}事业渐入佳境，家庭稳固，付出开始结出果实。",
        "迈入中年的你更加从容，{pron}懂得取舍，把精力留给真正重要的人和事。",
        "中年阶段{pron}迎来地位与影响力的提升，成为他人倚重的支柱。",
        "这一程{pron}虽肩挑重担，却也收获了尊重与踏实，内心前所未有的安稳。",
        "中年的你重新审视自我，{pron}在沉淀中找到了生活的新节奏与意义。",
        "壮年时{pron}财运与人缘俱旺，过往的积累在此刻汇成宽广的护城河。"
      ],
      old: [
        "晚年生活安逸祥和，{pron}含饴弄孙、寄情所好，心境如秋日暖阳般温润。",
        "老年的你被儿孙环绕，{pron}回首一生无憾，收获的是从容与满足。",
        "步入晚境，{pron}愈发豁达，身心康泰，常有老友相伴、清茶相伴。",
        "晚年是你回馈的时节，{pron}以阅历与智慧被后辈敬重，福气绵长。",
        "老年的生活节奏舒缓，{pron}在兴趣与静好中安度，少有烦忧。",
        "岁月静好，{pron}在熟悉的地方安享天年，脸上常挂着淡然的笑意。"
      ],
      luck: [
        "约 {age}，一桩意外的机遇从天而降，贵人相助，路越走越宽。",
        "{age}前后，你的才华被看见，事业或名声迎来关键跃升。",
        "在 {age}，一段美好的缘分或合作改变了你的轨迹，福气临门。",
        "{age}是你财运上扬之年，积蓄与收益都迈上新台阶。",
        "约 {age}，久拖的问题一朝化解，身心轻松，喜事连连。",
        "{age}前后，家庭添喜、关系升温，是你倍感温暖的时光。",
        "在 {age}，一次远行或学习带来转机，眼界与格局都被打开。",
        "{age}是你人缘爆发之年，贵人频现，所求多能如愿。"
      ],
      crisis: [
        "{age}有一道坎，抉择两难、压力陡增，易生焦虑与消耗。",
        "约 {age}，健康或关系亮起黄灯，需格外留意身体与情绪。",
        "{age}前后易遇小人是非，言行宜谨慎，避免无谓争执。",
        "在 {age}，财务或事业出现波动，信心受挫，宜守不宜攻。",
        "{age}有一场考验，旧模式被打破，逼你重新出发。",
        "约 {age}，亲人或环境的变故带来冲击，需稳心应对。",
        "{age}前后易陷自我怀疑，方向模糊，宜静心沉淀。",
        "在 {age}，一段关系或计划生变，情绪起伏明显。"
      ],
      advice: [
        "化解之道：凡事慢半拍，多听长者之言，以柔克刚最稳妥。",
        "化解之道：把健康放在第一位，规律作息、适度运动可转危为安。",
        "化解之道：谨言慎行、少议论他人，广结善缘自能避祸。",
        "化解之道：这一年宜守成蓄力，不盲目扩张，静待时机。",
        "化解之道：主动求助与倾诉，别把压力一人扛，转机就在沟通里。",
        "化解之道：回归初心、整理目标，短暂的停顿是为了走得更远。"
      ]
    }
  },

  en: {
    ui: {
      appTitle: "Destiny Calculator",
      appSubtitle: "Enter your birth details and see the story of a life",
      disclaimer: "⚠️ For entertainment only. All predictions are fictional — do not rely on them for medical, legal, or major life decisions.",
      lblYear: "Birth year",
      lblMonth: "Month",
      lblDay: "Day",
      lblTime: "Birth time (optional)",
      lblDontRemember: "Don't remember",
      lblLocation: "Birth place",
      locationPlaceholder: "e.g. Shantou, Guangdong / Shanghai / Madrid",
      lblGender: "Gender",
      lblMale: "Male",
      lblFemale: "Female",
      calcBtn: "Calculate my destiny",
      resetBtn: "Reset",
      formError: "Please fill in birth year, month, day and gender.",
      resultTitle: "Your Life Journey",
      summaryTitle: "Destiny Overview",
      statLifespan: "Life expectancy",
      statMarriage: "Marriage age",
      statFirstChild: "First child",
      statChildren: "Children",
      statDeath: "End of life",
      stagesHeading: "Four Stages of Life",
      lblYouth: "Youth (0–17)",
      lblYoung: "Young adult (18–35)",
      lblMiddle: "Middle age (36–55)",
      lblOld: "Later years (56+)",
      luckHeading: "Moments of Luck",
      crisisHeading: "Crises & Resolutions",
      lblLuck: "Luck",
      lblCrisis: "Crisis",
      childNone: "No children",
      footNote: "Destiny is shaped by the heart · Results are randomly generated for fun"
    },
    months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    pron: { male: "he", female: "she" },
    ageUnit: (n) => `age ${n}`,
    seasons: ["deep winter","early spring","late spring","early summer","high summer","early autumn","late autumn","early winter"],
    t: {
      youth: [
        "In {loc}, your childhood was carefree; {pron} showed early talent and was surrounded by kind mentors and friends.",
        "As a young person you were resilient — small setbacks only sharpened your determination.",
        "Your teenage years in {loc} were full of curiosity, and a unique gift began to show.",
        "A peaceful home let {pron} grow up with love and freedom, gentle yet firm.",
        "In the opening of youth you seemed quiet but burned with a quiet fire, gathering strength.",
        "Even as a teen, {pron} was considerate and well-liked — the friend others trusted."
      ],
      young: [
        "Youth is your launch phase: {pron} makes a name in work or study and meets someone who changes everything.",
        "In your twenties you dared to explore; through trial and error {pron} found a true calling.",
        "You traveled or changed surroundings, widened your view, and walked your own path.",
        "The early adult years brought growing-up rites; responsibility and independence took root.",
        "Outwardly soft, inwardly strong, you stayed calm under pressure and built a good name.",
        "You loved and strove boldly; lost at times, yet found your direction through experience."
      ],
      middle: [
        "Midlife is your golden season — career peaks, family steadies, effort bears fruit.",
        "Settling into middle age, {pron} learned to choose wisely and spend energy on what matters.",
        "This stage lifts your status and influence; others come to rely on you.",
        "Shouldering duties, you gained respect and a calm you had never known.",
        "You revisited yourself and found a new, peaceful rhythm of life.",
        "In your prime, fortune and goodwill both rose; past effort became a wide moat."
      ],
      old: [
        "Late life is peaceful; {pron} enjoys grandchildren and hobbies, warm as autumn sun.",
        "Surrounded by family, {pron} looks back with no regret, full of ease.",
        "In later years you grew open-hearted, healthy, with old friends and quiet tea.",
        "Your later chapter is one of giving back; the young respect your wisdom.",
        "Life slows gently; you rest in interests and calm, free of worry.",
        "Time is kind; {pron} spends {pron}'s days in a familiar place, with a tranquil smile."
      ],
      luck: [
        "Around {age}, an unexpected chance falls from the sky; a benefactor helps and the road widens.",
        "Near {age}, your talent is seen and career or fame takes a key leap.",
        "At {age}, a fine bond or partnership changes your path; fortune arrives.",
        "{age} is a year of rising wealth; savings and income step up.",
        "Around {age}, a long-stuck problem clears; body and mind relax, joys follow.",
        "Near {age}, the family gains happiness and warmth grows — a tender time.",
        "At {age}, a journey or study brings a turning point; horizons open.",
        "{age} is a year of blooming connections; helpers appear and wishes come true."
      ],
      crisis: [
        "At {age} there is a hurdle — hard choices and rising pressure bring anxiety.",
        "Around {age}, health or relationships flash a warning; mind body and mood.",
        "Near {age}, pettiness and gossip rise; speak and act with care.",
        "At {age}, money or career wavers and confidence dips; defend, don't attack.",
        "{age} brings a test that breaks the old pattern and forces a fresh start.",
        "Around {age}, a change in loved ones or surroundings hits; stay centered.",
        "Near {age}, self-doubt creeps in and direction blurs; pause and settle.",
        "At {age}, a relationship or plan shifts; emotions swing."
      ],
      advice: [
        "To resolve it: slow down half a beat, heed the elders, and overcome with softness.",
        "To resolve it: put health first — regular rest and moderate exercise turn crisis to safety.",
        "To resolve it: watch your words, avoid talking of others, and goodwill wards off harm.",
        "To resolve it: this year, hold and gather strength; don't expand blindly, wait for timing.",
        "To resolve it: ask for help and talk; don't carry pressure alone — the turn is in communication.",
        "To resolve it: return to your start, reorder goals; a short pause lets you go further."
      ]
    }
  },

  es: {
    ui: {
      appTitle: "Calculadora del Destino",
      appSubtitle: "Introduce tus datos de nacimiento y descubre la historia de una vida",
      disclaimer: "⚠️ Solo para entretenimiento. Todos los cálculos son ficticios; no los uses para decisiones médicas, legales o vitales.",
      lblYear: "Año de nacimiento",
      lblMonth: "Mes",
      lblDay: "Día",
      lblTime: "Hora de nacimiento (opcional)",
      lblDontRemember: "No lo recuerdo",
      lblLocation: "Lugar de nacimiento",
      locationPlaceholder: "p. ej. Shantou, Guangdong / Shanghai / Madrid",
      lblGender: "Género",
      lblMale: "Masculino",
      lblFemale: "Femenino",
      calcBtn: "Calcular mi destino",
      resetBtn: "Reiniciar",
      formError: "Completa año, mes, día y género.",
      resultTitle: "Tu Viaje de Vida",
      summaryTitle: "Resumen del Destino",
      statLifespan: "Esperanza de vida",
      statMarriage: "Edad de matrimonio",
      statFirstChild: "Primer hijo",
      statChildren: "Hijos",
      statDeath: "Fin de la vida",
      stagesHeading: "Cuatro Etapas de la Vida",
      lblYouth: "Juventud (0–17)",
      lblYoung: "Adolescencia (18–35)",
      lblMiddle: "Madurez (36–55)",
      lblOld: "Vejez (56+)",
      luckHeading: "Momentos de Suerte",
      crisisHeading: "Crisis y Remedios",
      lblLuck: "Suerte",
      lblCrisis: "Crisis",
      childNone: "Sin hijos",
      footNote: "El destino se forma en el corazón · Resultados generados al azar, solo por diversión"
    },
    months: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    pron: { male: "él", female: "ella" },
    ageUnit: (n) => `${n} años`,
    seasons: ["pleno invierno","principios de primavera","finales de primavera","principios de verano","verano pleno","principios de otoño","otoño profundo","principios de invierno"],
    t: {
      youth: [
        "En {loc}, tu infancia fue sin preocupaciones; {pron} mostró talento temprano y tuvo buenos maestros y amigos.",
        "De joven fuiste resiliente: los pequeños contratiempos solo afinaron tu determinación.",
        "Tus años de adolescencia en {loc} estuvieron llenos de curiosidad y un don único empezó a aparecer.",
        "Un hogar tranquilo dejó que {pron} creciera con amor y libertad, tierno pero firme.",
        "Al inicio de la juventud parecías callado, pero ardías en fuego silencioso, reuniendo fuerza.",
        "Incluso de adolescente, {pron} fue considerado y querido: el amigo en quien confiaban."
      ],
      young: [
        "La juventud es tu despegue: {pron} se hace un nombre en el trabajo o estudio y conoce a quien lo cambia todo.",
        "En los veintes te atreviste a explorar; por ensayo y error {pron} halló su verdadera vocación.",
        "Viajaste o cambiaste de entorno, ampliaste la mirada y seguiste tu propio camino.",
        "Los primeros años adultos trajeron ritos de crecimiento; la responsabilidad y la independencia echaron raíces.",
        "Por fuera suave, por dentro fuerte, mantuviste la calma bajo presión y te ganaste buen nombre.",
        "Amaste y luchaste con audacia; perdido a veces, pero hallaste tu rumbo con la experiencia."
      ],
      middle: [
        "La madurez es tu temporada dorada: la carrera culmina, la familia se afirma, el esfuerzo da fruto.",
        "Al asentarte en la mediana edad, {pron} aprendió a elegir con tino y gastar energía en lo que importa.",
        "Esta etapa eleva tu estatus e influencia; otros aprenden a apoyarse en ti.",
        "Llevando responsabilidades, ganaste respeto y una calma que nunca habías conocido.",
        "Te reconociste de nuevo y hallaste un ritmo de vida nuevo y sereno.",
        "En tu plenitud, la fortuna y la buena voluntad crecieron; el esfuerzo pasado se volvió un foso ancho."
      ],
      old: [
        "La vejez es apacible; {pron} disfruta de los nietos y sus aficiones, cálido como el sol de otoño.",
        "Rodeado de familia, {pron} mira atrás sin arrepentimiento, lleno de calma.",
        "En los años tardíos te volviste abierto de corazón, sano, con viejos amigos y té tranquilo.",
        "Tu capítulo final es de entrega; los jóvenes respetan tu sabiduría.",
        "La vida se calma suave; descansas en tus intereses y en la paz, libre de preocupaciones.",
        "El tiempo es amable; {pron} pasa sus días en un lugar familiar, con una sonrisa serena."
      ],
      luck: [
        "Cerca de los {age}, cae del cielo una oportunidad inesperada; un benefactor ayuda y el camino se ensancha.",
        "Cerca de los {age}, tu talento es visto y la carrera o la fama da un salto clave.",
        "A los {age}, un vínculo o sociedad cambia tu rumbo; llega la fortuna.",
        "Los {age} son de subida riqueza; ahorros e ingresos dan un paso arriba.",
        "Cerca de los {age}, un problema viejo se resuelve; cuerpo y mente descansan, siguen las alegrías.",
        "Cerca de los {age}, la familia gana felicidad y el cariño crece: un tiempo tierno.",
        "A los {age}, un viaje o estudio trae un punto de giro; se abren los horizontes.",
        "Los {age} son de conexiones en flor; aparecen ayudantes y los deseos se cumplen."
      ],
      crisis: [
        "A los {age} hay un obstáculo: decisiones duras y más presión traen ansiedad.",
        "Cerca de los {age}, la salud o las relaciones parpadean; cuida cuerpo y ánimo.",
        "Cerca de los {age}, crecen las habladurías; habla y actúa con cuidado.",
        "A los {age}, el dinero o la carrera titubean y la confianza baja; defiende, no ataques.",
        "Los {age} traen una prueba que rompe el viejo patrón y obliga a recomenzar.",
        "Cerca de los {age}, un cambio en seres queridos o el entorno golpea; mantente centrado.",
        "Cerca de los {age}, la duda de sí mismo entra y la dirección se nubla; pausa y asienta.",
        "A los {age}, una relación o plan cambia; las emociones oscilan."
      ],
      advice: [
        "Para resolverlo: reduce medio paso, escucha a los mayores y vence con suavidad.",
        "Para resolverlo: pon la salud primero — descanso y ejercicio moderado vuelven crisis en calma.",
        "Para resolverlo: cuida tus palabras, no hables de otros, y la buena voluntad aleja el daño.",
        "Para resolverlo: este año, aguanta y reúne fuerza; no te expandas a ciegas, espera el momento.",
        "Para resolverlo: pide ayuda y habla; no cargues la presión solo — el giro está en la comunicación.",
        "Para resolverlo: vuelve al inicio, reordena metas; una pausa corta te lleva más lejos."
      ]
    }
  }
};

if (typeof module !== "undefined") { module.exports = { I18N }; }
