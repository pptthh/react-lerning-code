import { connect } from "react-redux";
import DetailedViewUI from "./detailedViewUI";
import RootState from "../../services/rootState";
import DetailedViewState from "./dvState";

const mapDispatchToProps: DetailedViewState = {}

const mapSubdictsToProps = (state: RootState): DetailedViewState => ({
    // selectedDiskData1: state.serverDiff.selectedItem1!.serverState!.diskData.map(
    //     (d) => prepareDiskData(d, true)
    // ),
    // selectedDiskData2 : state.serverDiff.selectedItem2!.serverState!.diskData.map(
    //     (d) => prepareDiskData(d, false)
    // ),
})

const mapStateToProps = (state: RootState, ownprops: any) => mapSubdictsToProps(state);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailedViewUI);



// import { connect } from "react-redux";
// import searchResultsUI from "./searchResultsUI";

// const mapStateToProps = () => {};
// const mapDispatchToProps = {}

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(searchResultsUI);
