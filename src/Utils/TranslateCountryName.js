function TranslateCountryName(name) {
  let value = "";

  switch (name) {
    case "China (continental)":
      value = "china";
      break;
    case "Itália":
      value = "italy";
      break;
    case "Estados Unidos":
      value = "usa";
      break;
    case "Espanha":
      value = "spain";
      break;
    case "Alemanha":
      value = "germany";
      break;
    case "Irã":
      value = "iran";
      break;
    case "França":
      value = "france";
      break;
    case "Coreia do Sul":
      value = "korea";
      break;
    case "Suíça":
      value = "Switzerland";
      break;
    case "Reino Unido":
      value = "uk";
      break;
    case "Países Baixos":
      value = "Netherlands";
      break;
    case "Bélgica":
      value = "belgium";
      break;
    case "Áustria":
      value = "austria";
      break;
    case "Noruega":
      value = "norway";
      break;
    case "Suécia":
      value = "sweden";
      break;
    case "Portugal":
      value = "portugal";
      break;
    case "Dinamarca":
      value = "denmark";
      break;
    case "Canadá":
      value = "canada";
      break;
    case "Austrália":
      value = "australia";
      break;
    case "Malásia":
      value = "malaysia";
      break;
    case "Brasil":
      value = "brazil";
      break;
    case "República Checa":
      value = "czechia";
      break;
    case "Turquia":
      value = "turky";
      break;
    case "Israel":
      value = "israel";
      break;
    case "Luxemburgo":
      value = "luxembourg";
      break;
    default:
      break;
  }

  return value;
}

export default TranslateCountryName;
