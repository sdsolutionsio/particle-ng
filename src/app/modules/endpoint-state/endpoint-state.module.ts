import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndpointStateComponent } from './components/endpoint-state.component';



@NgModule({
    declarations: [EndpointStateComponent],
    exports: [
        EndpointStateComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ParticleEndpointStateModule { }
