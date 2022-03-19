import { IParticleSystemParticle, IParticleSystemSimulation } from '.';

export interface IParticleSystemEmitter
{
    id?: number;
    name?: string;
    spriteId?: number;
    maxNumParticles?: number;
    particlesPerFrame?: number;
    burstPulse?: number;
    fuseTime?: number;
    simulation?: IParticleSystemSimulation;
    particles?: IParticleSystemParticle[];
}
