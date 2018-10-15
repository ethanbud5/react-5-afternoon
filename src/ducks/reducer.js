const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROP = "UPDATE_PROP";
const UPDATE_FOUND = "UPDATE_FOUND";
const UPDATE_AGENT = "UPDATE_AGENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
const UPDATE_HISTORY = "UPDATE_HISTORY";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_ADDR_1 = "UPDATE_ADDR_1";
const UPDATE_ADDR_2 = "UPDATE_ADDR_2";
const UPDATE_ADDR_3 = "UPDATE_ADDR_3";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";


export function handleLoanType(loanType){
    return{
        type:UPDATE_LOAN_TYPE,
        payload:loanType
    }
}
export function handlePropType(property){
    return{
        type:UPDATE_PROPERTY_TYPE,
        payload:property
    }
}
export function updateCity(city){
    return{
        type:UPDATE_CITY,
        payload:city
    }
}
export function updateProp(prop){
    return{
        type:UPDATE_PROP,
        payload:prop
    }
}
export function updateFound(found){
    return{
        type:UPDATE_FOUND,
        payload:found
    }
}
export function updateAgent(agent){
    return{
        type:UPDATE_AGENT,
        payload:agent
    }
}
export function updateCost(cost){
    return{
        type:UPDATE_COST,
        payload:cost
    }
}
export function updateDownPayment(payment){
    return{
        type:UPDATE_DOWNPAYMENT,
        payload:payment
    }
}
export function updateHistory(history){
    return{
        type:UPDATE_HISTORY,
        payload:history
    }
}
export function updateCredit(score){
    return{
        type:UPDATE_CREDIT,
        payload:score
    }
}
export function updateAddr1(addr){
    return{
        type:UPDATE_ADDR_1,
        payload:addr
    }
}
export function updateAddr2(addr){
    return{
        type:UPDATE_ADDR_2,
        payload:addr
    }
}
export function updateAddr3(addr){
    return{
        type:UPDATE_ADDR_3,
        payload:addr
    }
}
export function updateFirstName(name){
    return{
        type:UPDATE_FIRST_NAME,
        payload:name
    }
}
export function updateLastName(name){
    return{
        type:UPDATE_LAST_NAME,
        payload:name
    }
}
export function updateEmail(email){
    return{
        type:UPDATE_EMAIL,
        payload:email
    }
}

function reducer(state=initialState,action){
    switch (action.type) {
        case UPDATE_LOAN_TYPE:
            return{
                ...state,
                loanType:action.payload
            }
        case UPDATE_PROPERTY_TYPE:
            return{
                ...state,
                propertyType:action.payload
            }
        case UPDATE_CITY:
            return{
                ...state,
                city:action.payload
            }
        case UPDATE_PROP:
            return{
                ...state,
                propToBeUsedOn:action.payload
            }
        case UPDATE_FOUND:
            return{
                ...state,
                found:action.payload
            }
        case UPDATE_AGENT:
            return{
                ...state,
                realEstateAgent:action.payload
            }
        case UPDATE_COST:
            return{
                ...state,
                cost:action.payload
            }
        case UPDATE_DOWNPAYMENT:
            return{
                ...state,
                downPayment:action.payload
            }
        case UPDATE_HISTORY:
            return{
                ...state,
                history:action.payload
            }
        case UPDATE_CREDIT:
            return{
                ...state,
                credit:action.payload
            }
        case UPDATE_ADDR_1:
            return{
                ...state,
                addressOne:action.payload
            }
        case UPDATE_ADDR_2:
            return{
                ...state,
                addressTwo:action.payload
            }
        case UPDATE_ADDR_3:
            return{
                ...state,
                addressThree:action.payload
            }
        case UPDATE_FIRST_NAME:
            return{
                ...state,
                firstName:action.payload
            }
        case UPDATE_LAST_NAME:
            return{
                ...state,
                lastName:action.payload
            }
        case UPDATE_EMAIL:
            return{
                ...state,
                email:action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;