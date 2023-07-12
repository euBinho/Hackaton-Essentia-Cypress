import { PrateleiraInfinita } from "..";
import { ELEMENTS as el } from '../integration/Login/elements';

export class Login extends PrateleiraInfinita {
    

    constructor(
        
    ) {
        super(
            
        );
        
    }


    loginSucesso(){
        cy.get(el.usuario)
    }
}

