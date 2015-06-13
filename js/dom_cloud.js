var storage = {};
function recursive(node) {
  if (!storage.hasOwnProperty(node.tagName)) {
    storage[node.tagName] = 1;
  } else {
    storage[node.tagName]++;
  }

  //if its a branch
  if(node.children.length > 0) {
    for(var i = 0; i < node.children.length; i++) {
      recursive(node.children[i]);
    }

  //else its a leaf
  } else {


    for(var i = 0; i < node.attributes.length; i++) {

      if (!storage.hasOwnProperty(node.attributes[i].name)) {
        storage[node.attributes[i].name] = 1;
      } else {
        storage[node.attributes[i].name]++;
      }
    }
  }
}

recursive(document.body);


var sortable = [];
for(var k in storage) {
  sortable.push([k, storage[k]]);
}

sortable.sort(function(a, b) {
  return b[1] - a[1];
})
console.log('sortable',sortable);


var sorted = [];
for (var i = 0; i < 20; i++) {
  sorted.push(sortable[i][0]);
}




var div = document.getElementById('dom_cloud_container');
div.innerHTML = sorted;
document.body.appendChild(div);