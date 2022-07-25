import { useDispatch, useSelector } from "react-redux";

import { TeamBoard } from "../Team/style";

const BoardCounterComponent = ({className}) => {

    const dispatch = useDispatch();

    const counterHome = useSelector(state => state.reducerCountHome);
    const counterVisitor = useSelector(state => state.reducerCountVisitor);

    const onIncrementHome = () => dispatch({type: 'increment/home'});
    const onDecrementHome = () => dispatch({type: 'decrement/home'});

    const onIncrementVisitor = () => dispatch({type: 'increment/visitor'});
    const onDecrementVisitor = () => dispatch({type: 'decrement/visitor'});

    return(
        <main className={className}>
            <TeamBoard nameTeam={'home'} counterTeam={counterHome} onIncrement={onIncrementHome} onDecrement={onDecrementHome}/>
                <span>VS</span>
            <TeamBoard nameTeam={'visitor'} counterTeam={counterVisitor} onIncrement={onIncrementVisitor} onDecrement={onDecrementVisitor} />
        </main>
    )
}

export default BoardCounterComponent;