export default function addQuickInfos(state = [], action) {
  switch (action.type) {
    case "ADD_INFOS":
      return [...state, action.payload.infos];
    default:
      return state;
  }
}
