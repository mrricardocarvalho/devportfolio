Prism.languages.al = {
  comment: /\/\/.*|\/\*[\s\S]*?\*\//,
  string: /"[^"]*"/,
  number: /\b\d+\b/,
  keyword: /\b(?:begin|end|procedure|function|var|if|then|else|case|of|while|do|repeat|until|for|to|downto|exit|with|codeunit|table|page|report|query|xmlport)\b/i,
  operator: /:=|[-+*/=<>]|and|or|not/i,
  punctuation: /[;:,.()\[\]]/,
};