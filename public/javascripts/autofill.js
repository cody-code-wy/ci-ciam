jQuery(document).ready(function(){
  jQuery('input').each((_, e) => {
    if ( jQuery(e).data("autofill") ) {
      jQuery(e).val(localStorage.getItem( `${jQuery(e).data("autofill")}` ));
    }
  })
  jQuery('select').each((_, e) => {
    if ( jQuery(e).data("autofill") ) {
      jQuery(e).val(localStorage.getItem( `${jQuery(e).data("autofill")}` ));
    }
  })
  jQuery('input').on('keyup', (e) => {
    console.log("change")
    if ( jQuery(e.target).data("autofill") ) {
      localStorage.setItem( `${jQuery(e.target).data("autofill")}`, jQuery(e.target).val() );
    }
  });
  jQuery('input[type="date"]').on('change', (e) => {
    if ( jQuery(e.target).data("autofill") ) {
      localStorage.setItem( `${jQuery(e.target).data("autofill")}`, jQuery(e.target).val() );
    }
  });
  jQuery('select').on('change', (e) => {
    if ( jQuery(e.target).data("autofill") ) {
      localStorage.setItem( `${jQuery(e.target).data("autofill")}`, jQuery(e.target).val() );
    }
  })
  jQuery('.autofill-clear').on('click', () => {
    localStorage.clear();
    jQuery('input').each( (_, e) => {
      if ( $(e).data('autofill') ) { $(e).val('') }
    } )
    jQuery('select').each( (_, e) => {
      if ( $(e).data('autofill') ) { $(e).val('') }
    } )
  });
});
