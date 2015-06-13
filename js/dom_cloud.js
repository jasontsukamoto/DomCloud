window.onload = function() {
  var start = document.body;
  if(start.children) {
    for (var i = 0; i < start.children.length; i++) {

    }

}



function recursive(node) {
  // console.log(node);
  // console.log(node.children);
  //if node is a branch
  if(node.children.length > 0) {
    // console.log('branch', node);
    for(var i = 0; i < node.children.length; i++) {
      recursive(node.children[i]);

    }
    //if its not a branch
  } else {
    //its a leaf
    // console.log('leaf', node);
    var x = node.tagName;
    var y;
    // console.log('node.classname',node.className);
    // if(node.className !== undefined) {
    //   y = node.className;
    // }
    // console.log('class',y);
    // console.log('tagName',x);
    // console.log('attributes',node.attributes);
    for (var i = 0; i<node.length; i++) {


    if(node.attributes.length>0) {
    console.log(node.attributes.length);

    }
  }

}

recursive(document.body);