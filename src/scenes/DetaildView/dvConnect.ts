import { connect } from "react-redux";
import DetailedViewUI from "./dvUI";
import RootState from "../../services/rootState";
import DetailedViewState from "./dvState";


// const mapSubdictsToProps = (state: RootState): DetailedViewState => ({
    // results: ResultItemProps[],
    // selectedDiskData1: state.serverDiff.selectedItem1!.serverState!.diskData.map(
        //     (d) => prepareDiskData(d, true)
        // ),
        // selectedDiskData2 : state.serverDiff.selectedItem2!.serverState!.diskData.map(
            //     (d) => prepareDiskData(d, false)
            // ),
// })

const mapDispatchToProps: DetailedViewState = {
    results:[],
}
const mapSubdictsToProps =
    (state: RootState): DetailedViewState =>
        state.detailedViewState;

const mapStateToProps = (state: RootState) => mapSubdictsToProps(state);

const DetailedView = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailedViewUI);

export default DetailedView 

// import { connect } from "react-redux";
// import searchResultsUI from "./searchResultsUI";

// const mapStateToProps = () => {};
// const mapDispatchToProps = {}

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(searchResultsUI);
