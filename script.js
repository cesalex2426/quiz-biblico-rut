const preguntas = [
  {
    pregunta: "¿Por qué salió la familia de Noemí de Belén hacia Moab?",
    opciones: ["Por hambre", "Por guerra", "Por una enfermedad"],
    correcta: 0
  },
  {
    pregunta: "¿De dónde era Rut?",
    opciones: ["Egipto", "Moab", "Filistea"],
    correcta: 1
  },
  {
    pregunta: "¿Cómo se llamaba el esposo de Noemí?",
    opciones: ["Booz", "Obed", "Elimelec"],
    correcta: 2
  },
  {
    pregunta: "¿Qué estaba cosechando Rut cuando Booz la conoció?",
    opciones: ["Trigo", "Cebada", "Uvas"],
    correcta: 1
  },
  {
    pregunta: "¿Qué relación tenía Rut con Noemí?",
    opciones: ["Hermana", "Hija", "Nuera"],
    correcta: 2
  },
  {
    pregunta: "¿Qué hizo Rut a medianoche en la era por consejo de Noemí?",
    opciones: [
      "Se escondió en la era",
      "Se acostó a los pies de Booz",
      "Regresó a Moab"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Quién tenía el derecho de redimir antes que Booz?",
    opciones: [
      "El hermano de Noemí",
      "El hijo de Rut",
      "Otro pariente más cercano"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué objeto se quitaba como señal en la transacción de redención?",
    opciones: ["Un anillo", "Una sandalia", "Un manto"],
    correcta: 1
  },
  {
    pregunta: "¿Quién fue la madre de Booz?",
    opciones: ["Noemí", "Rut", "Rahab"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es la línea de descendencia correcta hasta David?",
    opciones: [
      "Rut → Booz → Obed → Isaí → David",
      "Rut → Obed → Booz → Isaí → David",
      "Booz → Rut → Isaí → Obed → David"
    ],
    correcta: 0
  }
];

let preguntaActual = 0;
let puntuacion = 0;

const contenedor = document.getElementById("quiz");

function mostrarPregunta() {
  const p = preguntas[preguntaActual];

  contenedor.innerHTML = `
    <h2>Pregunta ${preguntaActual + 1} de ${preguntas.length}</h2>
    <h3>${p.pregunta}</h3>

    ${p.opciones.map((opcion, indice) => `
      <button onclick="responder(${indice})">
        ${opcion}
      </button>
    `).join("")}
  `;
}

function responder(indice) {
  const p = preguntas[preguntaActual];

  if (indice === p.correcta) {
    puntuacion += 10;
    alert("✅ ¡Correcto! +10 puntos");
  } else {
    alert("❌ Incorrecto");
  }

  preguntaActual++;

  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  let mensaje = "";

  if (puntuacion === 100) {
    mensaje = "👑 ¡Modo Rabino dominado!";
  } else if (puntuacion >= 70) {
    mensaje = "🔥 ¡Excelente conocimiento de Rut!";
  } else if (puntuacion >= 50) {
    mensaje = "👏 ¡Buen trabajo!";
  } else {
    mensaje = "📖 ¡Sigue estudiando el libro de Rut!";
  }

  contenedor.innerHTML = `
    <h1>🎉 Quiz terminado</h1>
    <h2>Tu puntuación: ${puntuacion} / 100</h2>
    <h3>${mensaje}</h3>
    <button onclick="location.reload()">🔄 Jugar nuevamente</button>
  `;
}

mostrarPregunta();
