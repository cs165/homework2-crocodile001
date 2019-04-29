const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function walkTree(root, level) {
	
	if(root.nodeName == 'SCRIPT'){
		return;
	}
	else if(root.nodeName == 'STYLE'){
		return;
	}
	
	if (root.nodeType === Node.TEXT_NODE) {
		console.log(level + 'text:' + root.textContent);
		
		let NewArray = new Array();
　		NewArray = root.textContent.split(" ");
		console.log(NewArray);

		for(let i = 0, len = NewArray.length; i < len; i++){
			let rep;
			for(let item in MATCH_LIST){
				rep = NewArray[i].replace(new RegExp(item, 'g'), MATCH_LIST[item]);
				if(NewArray[i] != rep){
					NewArray[i] = rep;
					break;
				}
			}
		}
		
		root.textContent = NewArray.join(" ");
		console.log(root.textContent);
	} else {
		console.log(level + root.nodeName);
	}
	for (const child of root.childNodes) {
		walkTree(child, level + " ");
	}
}

function transformTextNodes(node) {
	// TODO(you): Implement this function! See HW spec for details.
	walkTree(node, "");
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
