import { Component, computed, effect, Signal, signal, WritableSignal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'profile',
    templateUrl:'./profile.html',
    styleUrl:'./profile.css',
    imports: [FormsModule]
    // template:`<h1>Profile Component</h1>`,
    // styles:'h1{color:green}'

})

export class Profile{
    count = signal(10);
    x = 20;
    // Defining multiple data types for signal
    data : WritableSignal<number | string>= signal(100); // Writable
    compu : Signal<number> = computed(() => 200); // Read only

    counter = signal(0);
    displayHeading = false;

    constructor(){
        // effect(()=>{
        //     console.log(this.count());
        // });

        effect(()=>{
            if(this.counter() == 2){
                this.displayHeading = true;
            }
            else{
                this.displayHeading = false;
            }
        })
    }

    updateValue(){
        this.count.set(this.count() + 1);
    }

    toggleValue(){
        this.counter.set(this.counter()+1);
    }

    // Two Way binding
    name = "Aniket";
}