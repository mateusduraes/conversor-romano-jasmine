describe("Conversor de Números Inteiros para Números Romanos", function(){

	var conversor;
			
	beforeEach(function(){
		conversor = pegaConversor();
	});

	describe("Deve converter corretamente o número inteiro em número romano", function(){

		describe("Testando com o menor número possível.",function(){
			it("Deve retornar 'I' quando converter o número 1", function(){		
				var romano = conversor.converteParaRomano(1);
				expect(romano).toEqual('I');
			});
		});


		describe("Testando com o maior número possível", function(){
			it("Deve retornar 'XXXVIV' quando converter o número 39", function(){		
				var romano = conversor.converteParaRomano(39);
				expect(romano).toEqual('XXXVIV');
			});
		});

		describe("Testando com alguns números que estão entre 1 e 39", function(){
			it("Deve retornar 'III' quando converter o número 3", function(){		
				var romano = conversor.converteParaRomano(3);
				expect(romano).toEqual('III');
			});

			it("Deve retornar 'XV' quando converter o número 15", function(){	
				var romano = conversor.converteParaRomano(15);
				expect(romano).toEqual('XV');
			});

			it("Deve retornar 'XXIV' quando converter o número 24", function(){	
				var romano = conversor.converteParaRomano(24);
				expect(romano).toEqual('XXIV');
			});
		});
		
	});

	describe("Deve ignorar números que estão fora do escopo de conversão", function(){
		it("Deve retornar 'Número inválido' quando o valor for <= 0", function(){
			var romano = conversor.converteParaRomano(0);
			expect(romano).toEqual('Número inválido');
		})
		it("Deve retornar 'Número inválido' quando o valor for >= 40", function(){
			var romano = conversor.converteParaRomano(40);
			expect(romano).toEqual('Número inválido');
		});
	});

});


