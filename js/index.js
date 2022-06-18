/*
Получение элементов
1 document.getElementById('idElem')
2document.querySelector(css)  '.myClass'   '#idElem'   'ul > li:last-child' '.cont > .myClass'
3 document.querySelectorAll(css)   return []
4 *document.getElementsByTagName()  getElementsByClassName() getElementsByName()
5 elem.closest(css)
6 elem.matches(css)

Атрибуты Элемента
elem.getAttribute(nameAttr)
elem.setAttribute(nameAttr, valueAttr)
elem.hasAttribute(nameAttr)
elem.attributes 

Создание document.createElement(tag)
Удаление elem.remove()
Копирование / клонирование elem.cloneNode()

Вставка/ добавление
node.append(elem)
prepend(elem)
before() / after()
replaceWith()
* appendChild(), insertChild(), replaceChild(), removeChild()

*/