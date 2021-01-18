// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health
        this.strength=strength
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health= this.health- damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength)
        this.name=name
    }
    receiveDamage(damage){
        this.health= this.health- damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health,strength)
    }
    receiveDamage(damage){
        this.health= this.health- damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }
    addViking(vicking){
        this.vikingArmy.push(vicking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let v= Math.floor(Math.random()*this.vikingArmy.length)
        let randomViking= this.vikingArmy[v]
        let s= Math.floor(Math.random()*this.saxonArmy.length)
        let randomSaxon= this.saxonArmy[s]           
        
        let life= randomSaxon.receiveDamage(randomViking.strength)
        
        if(randomSaxon.health<=0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
        }
        return life;
    }
    saxonAttack(){
        let v= Math.floor(Math.random()*this.vikingArmy.length)
        let randomViking= this.vikingArmy[v]
        let s= Math.floor(Math.random()*this.saxonArmy.length)
        let randomSaxon= this.saxonArmy[s]           
        
        let life= randomViking.receiveDamage(randomSaxon.strength)
        
        if(randomViking.health<=0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
        }
        return life;
    }
    
    
    showStatus(){
        if(this.saxonArmy==""){
            return "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy==""){
            return "Saxons have fought for their lives and survived another day..."
        }
        else if(this.saxonArmy.length>0 && this.vikingArmy.length>0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
