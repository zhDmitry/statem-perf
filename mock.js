const MAX = 1000;
const MODIFY_FACTOR = 0.1;

function getItem(any, i) {
  return {
    todo: `todo_${i}`,
    done: false,
    someThingCompletelyIrrelevant: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  };
}
function generateDraft() {
  const draft = [];
  for (let i = 0; i < MAX; i++) {
    draft.push(getItem(undefined, i));
  }
  return draft;
}

const reducer = (draft = generateDraft()) => {
  const newDraft = draft.concat([]);
  for (let i = 0; i < MAX * MODIFY_FACTOR; i++) {
    newDraft[i] = Object.assign({}, newDraft[i], { done: Math.random() });
  }
  return newDraft;
};

module.exports.MODIFY_FACTOR = MODIFY_FACTOR;
module.exports.generateDraft = generateDraft;
module.exports.MAX = MAX;
module.exports.reducer = reducer;
