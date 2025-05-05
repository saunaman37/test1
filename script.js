//タイトル色変更の設定
const subttl = document.querySelector('#sub_ttl');
const keyframes1 = {
  color: ['red','yellow','white']
};
const options1 = {
  duration: 2000,
  direction: 'alternate',
  iterations: Infinity,
};
subttl.animate(keyframes1,options1);