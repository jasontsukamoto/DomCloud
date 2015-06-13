var storage = {};
function recursive(node) {
  //if its a branch
  if(node.children.length > 0) {
    for(var i = 0; i < node.children.length; i++) {
      recursive(node.children[i]);
    }

  //else its a leaf
  } else {
    for(var i = 0; i < node.attributes.length; i++) {

     console.log('node.attributes.name',node.attributes[i].name);

      if (!storage.hasOwnProperty(node.attributes[i].name)) {
        storage[node.attributes[i].name] = 1;
      } else {
        storage[node.attributes[i].name]++;
      }
    }
    return storage;


  }

}

recursive(document.body);