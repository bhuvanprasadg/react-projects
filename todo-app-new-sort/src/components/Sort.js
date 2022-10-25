import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setSort } from "../redux/actions";
import { SORT_OPTIONS } from "../constants";

function Sort({ activeSort, setSort }) {
  return (

    <div className="visibility-filters" style={{ marginTop: "2rem" }}>
      {Object.keys(SORT_OPTIONS).map((filterKey) => {
        const currentFilter = SORT_OPTIONS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeSort && "filter--active"
            )}
            onClick={() => {
              setSort(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { activeSort: state.sortOption };
};

export default connect(mapStateToProps, { setSort })(Sort);
