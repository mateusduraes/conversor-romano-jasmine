function pegaConversor(){	

	var conversor = {
		converteParaRomano : function(numeroDecimal){
			
			if (numeroDecimal <= 0 || numeroDecimal >= 40) return 'Número inválido';

			let numeroRomano = '';

			while(numeroDecimal > 0){

				if(numeroDecimal >= 10){
					numeroRomano += 'X';
					numeroDecimal -= 10;
				} else if (numeroDecimal >= 5){
					numeroRomano += 'V';
					numeroDecimal -= 5;
				} else if (numeroDecimal >= 4){
					numeroRomano += 'IV';
					numeroDecimal -= 4;
				} else {
					numeroRomano += 'I';
					numeroDecimal--;
				}
			}
			return numeroRomano;
		}
	};

	return conversor;

}