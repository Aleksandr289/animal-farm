
jQuery('document').ready(function(){
	jQuery('body').append('<a href="https://yandex.ru/images/search?from=tabbar&text=%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5%20%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D0%B5">Каких милых животных вы у нас увидете!</a>');
	var r1;
	r1=$('p').clone();
	$('body').append(r1);
	$('input').on('keyup',function(){
	var a1, b2, c3;
	a1=$('#al1').val();
	b2=$('#al2').val();
	a1=parseInt(a1);
	b2=parseInt(b2);
	c3=a1*150+b2*250;
	$('#d3').html(c3+' рублей');
	});
	var y;
	y=prompt('Приветствуем вас!Напишите ваше имя?','Олег');
	$('#e4').html('Вам обязательно понравится у нас, '+y);	
	var f6;
		f6= 149;
		if (f6>150||f6==150){
		confirm('На сегодня еще много билетов на ферму');
		}
		else if(f6==149){
		confirm('На сегодня есть немного билетов на ферму');
		}
		else{
		confirm('Торопитесь, на сегодня осталось мало билетов на ферму');
		}
	
});
