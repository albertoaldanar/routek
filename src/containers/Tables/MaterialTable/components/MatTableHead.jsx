/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { RTLProps } from '../../../../shared/prop-types/ReducerProps';

const rows = [
  {
    id: 'seleccionarTodo', disablePadding: true, label: 'Seleccionar todo',
  },
  {
    id: 'fecha', disablePadding: true, label: 'Fecha',
  },
  {
    id: 'cliente', disablePadding: true, label: 'Cliente',
  },
  {
    id: 'tiends', disablePadding: true, label: 'Tienda',
  },
  {
    id: 'Metodo', disablePadding: true, label: 'Metodo',
  },
  {
    id: 'Monto', disablePadding: true, label: 'Monto',
  },
  {
    id: 'Empleado', disablePadding: true, label: 'Empleado',
  },
  {
    id: 'Mongo', disablePadding: true, label: 'Mongo', canal: true
  },
  {
    id: 'Cdigital', disablePadding: true, label: 'Cdigital', canal: true
  },
  {
    id: 'Cartera en linea', disablePadding: true, label: 'Cartera en linea', canal: true
  },
  {
    id: 'Com_ETL', disablePadding: true, label: 'Com_ETL', canal: true
  },
  {
    id: 'Control Tiendas', disablePadding: true, label: 'Control Tiendas', canal: true
  },

];

class MatTableHead extends PureComponent {
  static propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    rtl: RTLProps.isRequired,
  };

  createSortHandler = property => (event) => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
  };

  render() {
    const {
      onSelectAllClick, order, orderBy, numSelected, rowCount, rtl,
    } = this.props;

    return (
      <TableHead className ="table__header">
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              className={`material-table__checkbox ${numSelected === rowCount && 'material-table__checkbox--checked'}`}
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(row => (
            <TableCell
              className={row.canal ? "material-table__cell material-table__cell--sort material-table__cell-canal": "material-table__cell material-table__cell--sort material-table__cell-right"}
              key={row.id}
              align={rtl.direction === 'rtl' ? 'right' : 'left'}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === row.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={this.createSortHandler(row.id)}
                className="material-table__sort-label"
                dir="ltr"
              >
               <p> {row.label} </p>
              </TableSortLabel>
            </TableCell>
          ), this)}
        </TableRow>
      </TableHead>
    );
  }
}

export default connect(state => ({
  rtl: state.rtl,
}))(MatTableHead);
