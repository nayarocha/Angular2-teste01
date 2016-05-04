import {Component} from 'angular2/core';


@Component({
	/* metadatas*/
    selector: 'meu-app',
    template: `
	    <h1>Code Girl - exemplo</h1>
	    <h2>TEMAS</h2>
	    <ul>
	    	<li *ngFor="#tarefa of tarefas">
	    		{{tarefa}}
	    	</li>
	    </ul>	
	    <input type="text" name="tarefa" placeholder="digite a tarefa ..."
	    	[(ngModel)]="txtTarefa"
	    >
	    <button (click)="adicionar()">Adicionar</button>
    `
})
export class AppComponent{
	/* Lista  temas*/
	public tarefas: string[] = [
		'Engenharia de software'
		'Redes'
		'Ux Design'
		'Empreendedorismo'

	];

	/* vai conter o valor de ngmodel - button*/
	public txtTarefa: string;
	
	/* Metodo que adiciona o tema na lista de temas*/
	adicionar(){
		if(this.txtTarefa != ''){
			this.tarefas.push(this.txtTarefa);
			this.txtTarefa = '';
		}

	}
}