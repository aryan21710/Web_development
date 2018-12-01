
import {Parent} from './module_in_class.js'
import {Child} from './module_in_class.js'

const pdiv=new Parent('PARENTDIV USING CLASS','red','black');
const cdiv=new Child('ChildDiv USING INHERITANCE CLASS','yellow','blue');
const div=[pdiv,cdiv];
for (let divs of div) {
	divs.makeDiv();
}
