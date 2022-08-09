import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import {useSelector} from "react-redux";
import {actionCreators} from "../state/index";

function Shop() {
  const dispatch = useDispatch();
   const balance = useSelector(state => state.amount)
  const {withdrowMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
  return (
          <div>
              <h2 className="mb-5">Deposit/Withdraw Money</h2>
              <button  className="btn btn-primary mx-3" onClick={()=>(withdrowMoney(100))}>-</button>
                  Update Balance ({balance})
              <button  className="btn btn-primary mx-3" onClick={()=>(depositMoney(100))}>+</button>
        </div>
  );
}

export default Shop;