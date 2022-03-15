import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap'

import SearchPanel from './SearchPanel'
import BulkController from '../controllers/BulkController'
import FilterController from '../controllers/Filter_Controller'
import ViewController from '../controllers/ViewController'

const Controller = ({
    term,
    handleSearch,
    toggleForm,
    handleFilter,
    changeView, 
    view, 
    clearSelected, 
    clearCompleted, 
    reset
}) => (
    <div>
        <SearchPanel 
            term={term}
            handleSearch={handleSearch}
            toggleForm={toggleForm}
        />
        <Row className="my-4">
            <Col md={{size: 4 }}>
                <FilterController handleFilter={handleFilter} />
            </Col>
            <Col md={{size: 4 }}>
                <ViewController view={view} changeView={changeView} />
            </Col>
            <Col md={{size: 4 }} className="d-flex">
                <div className="ml-auto">
                    <BulkController 
                        clearSelected={clearSelected}
                        clearCompleted={clearCompleted}
                        reset={reset}
                    />
                </div>
            </Col>
        </Row>
    </div>
)

Controller.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired

}
export default Controller