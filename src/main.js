import './assest/css/index.css'
import './assest/css/common.less'

const Hello = () => {
  let hello = document.createElement('div');
  hello.innerHTML = "Long time no see!11";
  return hello;
}

document.querySelector("#root").appendChild(Hello());