const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const constraint=Matter.Constraint
var engine,world
var droplets
var lightning
function preload(){
    
}

function setup(){
    createCanvas(1200,800)
    engine=Engine.create()
    world=engine.world

    droplets=new droplet(300,200,30)
     lightning= new lightning()
   
}

function draw(){
    droplets.display()
    lightning.display()
}   

