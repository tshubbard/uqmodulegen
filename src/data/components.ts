export const componentsData = [{
  type: 'address',
  label: 'Address Search',
  key: 'address',
  constName: 'Address',
  deprecated: true,
  iconName: 'address',
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'addressSearch',
    label: 'Address Search',
    streetLabel: 'Street Address',
    street2Label: 'Street Address 2',
    cityLabel: 'City',
    stateLabel: 'State',
    zipLabel: 'Zip',
    countryLabel: 'Country',
    noOptionsMessage: 'No Matching Result',
    loadingLabel: 'Loading...',
    persistent: true,
    isShortFormatAddress: true
  }
}, {
  type: 'addressv2',
  label: '',
  key: 'addressv2',
  constName: 'AddressV2',
  deprecated: true,
  iconName: 'address',
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'addressv2',
    label: '',
    streetLabel: 'Street Address',
    street2Label: 'Street Address 2',
    cityLabel: 'City',
    stateLabel: 'State',
    zipLabel: 'Zip',
    countryLabel: 'Country',
    noOptionsMessage: 'No Matching Result',
    loadingLabel: 'Loading...',
    persistent: true,
    isShortFormatAddress: true
  }
}, {
  type: 'barcodeScanner',
  label: '',
  key: 'ls',
  constName: 'LicenseScanner',
  iconName: 'barcode-scanner',
  hasOptions: {
    readOnlyView: false,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'ls',
    label: '',
    input: true,
    customClass: '',
    description: '',
    protected: false,
    persistent: true,
    hidden: false,
    disabled: false,
    labelProperty: 'label',
    validate: {
      required: false
    },
    data: {
      values: [],
      url: ''
    },
    mapData: {
      dataOutputObject: []
    }
  }
}, {
  type: 'basicDropdown',
  label: '',
  key: 'basicDropdown',
  constName: 'BasicDropdown',
  iconName: 'basic-dropdown',
  dataSchema: true,
  alreadyExists: true,
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    active: true,
    key: 'basicDropdown',
    label: '',
    input: true,
    customClass: '',
    description: '',
    protected: false,
    persistent: true,
    hidden: false,
    disabled: false,
    labelProperty: 'label',
    validate: {
      required: false
    },
    data: {
      values: [],
      url: ''
    }
  }
}, {
  type: 'browserStorage',
  label: 'Browser Storage',
  key: 'browserStorage',
  constName: 'BrowserStorage',
  iconName: 'browser-storage',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    active: true,
    key: 'browserStorage',
    label: 'Browser Storage',
    input: true,
    tableView: true,
    linked: {
      inputs: [],
      outputs: []
    },
    replace: false,
    filters: [],
    inputs: [],
    outputs: [],
    operation: 'save',
    topLevelArray: false,
    arrayKeyPromote: '',
    unqorkApi: null,
    service: null,
    preRequestTransform: null,
    prefix: ''
  }
}, {
  type: 'button',
  label: 'Submit',
  key: 'btn',
  constName: 'Button',
  iconName: 'button',
  alreadyExists: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    input: true,
    label: 'Submit',
    tableView: false,
    key: 'btn',
    size: 'md',
    leftIcon: '',
    rightIcon: '',
    block: false,
    elementType: 'module',
    action: 'save',
    disableOnInvalid: false,
    oneClickOnly: false,
    theme: 'primary',
    persistent: false,
    errorMessage: 'Please check your module and fix fields outlined in red',
    errorTitle: 'Oops - {{ errors }} error(s) have been found!',
    successMessage: 'Success!',
    successValidateMessage: 'Success!',
    doNotShowValidatedPopup: true,
    confirmationButton: 'OK',
    cancelButton: 'Cancel'
  }
}, {
  type: 'chart',
  label: '',
  key: 'chart',
  constName: 'Chart',
  iconName: 'chart',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: true,
    input: false,
    key: 'chart',
    label: '',
    protected: false,
    unique: false,
    persistent: true,
    showTitle: false,
    chartData: {
      tooltipFormat: '{series.name}:{point.y:,.0f}',
      labelFormat: '{point.y:,.0f}',
      height: 300,
      xAxisType: 'category',
      yAxisType: 'linear',
      dataInputObject: [],
      dataOutputObject: []
    },
    printChartLabel: 'Print chart',
    downloadCSVLabel: 'Download CSV',
    downloadXLSLabel: 'Download XLS',
    downloadXLSXLabel: 'Download XLSX',
    downloadPDFLabel: 'Download PDF document'
  }
}, {
  type: 'checkbox',
  label: 'Single Checkbox',
  key: 'checkbox',
  constName: 'Checkbox',
  deprecated: true,
  iconName: 'checkbox',
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'checkbox',
    label: '',
    autofocus: false,
    input: true,
    inputType: 'checkbox',
    tableView: true,
    hideLabel: false,
    datagridLabel: true,
    defaultValue: false,
    protected: false,
    persistent: true,
    hidden: false,
    name: '',
    value: '',
    clearOnHide: true,
    validate: {
      required: false
    },
  }
}, {
  type: 'checkboxv2',
  label: 'Single Checkbox',
  key: 'checkboxv2',
  constName: 'CheckboxV2',
  iconName: 'checkbox',
  dataSchema: true,
  alreadyExists: true,
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    key: 'checkboxv2',
    label: ''
  }
}, {
  type: 'checkpoint',
  label: 'Checkpoint',
  key: 'cp',
  constName: 'Checkpoint',
  iconName: 'checkpoint',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'cp',
    label: ''
  },
}, {
  type: 'collection',
  label: 'Collection',
  key: 'collection',
  constName: 'Collection',
  iconName: 'collection',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'collection',
    input: false,
    label: '',
    tableView: false,
    components: []
  }
}, {
  type: 'columns',
  label: 'Columns',
  key: 'col',
  constName: 'Columns',
  iconName: 'columns',
  alreadyExists: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    clearOnHide: false,
    input: false,
    key: 'col',
    selectedColumnLayout: 'col-layout-6-6',
    tableView: false,
    columns: [
      {
        components: [],
        offset: 0,
        pull: 0,
        push: 0,
        width: 6
      },
      {
        components: [],
        offset: 0,
        pull: 0,
        push: 0,
        width: 6
      }
    ]
  }
}, {
  type: 'container',
  label: 'Container',
  key: 'container',
  constName: 'Container',
  iconName: 'container',
  deprecated: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    input: true,
    tree: true,
    components: [],
    tableView: true,
    label: '',
    protected: false,
    persistent: true,
    clearOnHide: true
  }
}, {
  type: 'content',
  label: 'Content',
  key: 'content',
  constName: 'Content',
  iconName: 'content',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'content',
    input: false,
    html: '',
    downloadPDFLabel: 'PDF Download',
    downloadXLSLabel: 'Excel Download'
  }
}, {
  type: 'currency',
  label: 'Currency',
  key: 'currency',
  constName: 'Currency',
  iconName: 'currency',
  deprecated: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    autofocus: false,
    input: true,
    tableView: true,
    inputType: 'text',
    inputMask: '',
    label: 'Currency Field',
    placeholder: '',
    prefix: '',
    suffix: '',
    defaultValue: '',
    protected: false,
    persistent: true,
    hidden: false,
    clearOnHide: true,
    validate: {
      required: false,
      multiple: '',
      custom: ''
    },
    conditional: {
      show: null,
      when: null,
      eq: ''
    }
  }
}, {
  type: 'customComponent',
  label: 'Custom Component',
  key: 'customComponent',
  constName: 'CustomComponent',
  iconName: 'custom-component',
  deprecated: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {}
}, {
  type: 'day',
  label: 'Day',
  key: 'day',
  constName: 'Day',
  iconName: 'day',
  deprecated: true,
  hasOptions: {
    readOnlyView: false,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    autofocus: false,
    input: true,
    tableView: true,
    label: 'Day Field',
    fields: {
      day: {
        type: 'number',
        placeholder: '',
        required: false
      },
      month: {
        type: 'select',
        placeholder: '',
        required: false
      },
      year: {
        type: 'number',
        placeholder: '',
        required: false
      }
    },
    dayFirst: false,
    protected: false,
    persistent: true,
    hidden: false,
    clearOnHide: true,
    validate: {
      custom: ''
    }
  }
}, {
  type: 'datagrid',
  label: 'Data Grid',
  key: 'dg',
  constName: 'DataGrid',
  iconName: 'data-grid',
  hasOptions: {
    readOnlyView: false,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    addAnotherPosition: 'bottom',
    autofocus: false,
    clearOnHide: true,
    components: [],
    hidden: false,
    input: true,
    label: 'Data Grid',
    persistent: true,
    protected: false,
    tableView: true,
    tags: [],
    tree: true,
  }
}, {
  type: 'datamapper',
  label: 'DataMapper',
  key: 'dm',
  constName: 'DataMapper',
  iconName: 'data-mapper',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: true,
    input: true,
    tableView: true,
    key: 'dm',
    label: '',
    protected: false,
    unique: false,
    persistent: false,
    datamapperData: {
      dataObject: [],
      dataInputObject: [],
      dataOutputObject: []
    },
    triggerType: 'manual'
  }
}, {
  type: 'dataviewer',
  key: 'adg',
  constName: 'AdvancedDatagrid',
  label: 'Advanced Datagrid',
  iconName: 'data-viewer',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: true,
    input: true,
    tableView: true,
    label: 'Advanced Datagrid',
    protected: false,
    unique: false,
    persistent: true,
    resetAction: 'add',
    savingMessage: 'Saving...',
    hideLabel: true,
    dataviewerData: {
      dataDisplayObject: [],
      dataInputObject: [],
      dataYesNoQuestions: []
    },
    errorMessage: 'Please check your module and fix fields outlined in red',
    errorTitle: 'Oops - {{ errors }} error(s) have been found!',
    deleteTitle: 'Confirm deletion',
    deleteMessage: 'Are you sure you want to delete this item?',
    actionLabel: 'Actions',
    saveButton: 'Save',
    cancelButton: 'Cancel',
    addButton: 'Add',
    editButton: 'Edit',
    viewButton: 'View',
    deleteButton: 'Delete',
    confirmationButton: 'OK',
    showDeleteConfirmation: false,
    components: [],
    boundFields: [],
    boundEditFields: [],
    boundUnqorkFields: []
  }
}, {
  type: 'dataworkflow',
  label: 'Data Workflow',
  key: 'dwf',
  constName: 'DataWorkflow',
  iconName: 'data-workflow',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: true,
    input: false,
    key: 'dwf',
    label: '',
    protected: false,
    unique: false,
    persistent: false,
    showTitle: false,
    applyFindReplace: false,
    triggerType: 'manual',
    dataworkflowData: {
      dataInputObject: [],
      dataOutputObject: [],
      dataOperationObject: []
    },
    manualLayout: false
  }
}, {
  type: 'dateinput',
  label: 'Date Input',
  key: 'dateinput',
  constName: 'DateInput',
  iconName: 'date-input',
  dataSchema: true,
  alreadyExists: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: true
  },
  defaultValues: {
    label: 'Date Input',
    persistent: true,
    active: true,
    delimiter: '/',
    yearrange: 10,
    datelimit: '',
    defaultDelimiter: '/',
  }
}, {
  type: 'datetime',
  label: 'Date Picker',
  key: 'datetime',
  constName: 'DatePicker',
  iconName: 'date-picker',
  deprecated: true,
  alreadyExists: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    autofocus: false,
    input: true,
    tableView: true,
    label: 'Date Time Field',
    placeholder: '',
    format: 'yyyy-MM-dd HH:mm a',
    enableDate: true,
    enableTime: true,
    defaultDate: '',
    datepickerMode: 'day',
    datePicker: {
      showWeeks: true,
      startingDay: 0,
      initDate: '',
      minMode: 'day',
      maxMode: 'year',
      yearRows: 4,
      yearColumns: 5
    },
    timePicker: {
      hourStep: 1,
      minuteStep: 1,
      showMeridian: true,
      readonlyInput: false,
      mousewheel: true,
      arrowkeys: true
    },
    protected: false,
    persistent: true,
    hidden: false,
    clearOnHide: true,
    validate: {
      required: false,
      custom: ''
    }
  }
}, {
  type: 'decision',
  label: 'Decisions',
  key: 'rule',
  constName: 'Decision',
  iconName: 'decision',
  alreadyExists: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    input: false,
    tableView: false,
    key: 'rule',
    label: '',
    protected: false,
    unique: false,
    persistent: false,
    debounceSetting: 0,
    linked: {
      inputs: [],
      outputs: []
    },
    decisionData: {
      dataObject: [],
      dataTestObject: [],
      dataInputObject: [],
      dataOutputObject: [],
      dataHeader: [],
      dataFrame: [],
      decisionType: 'first'
    },
    triggerType: 'manual'
  }
}, {
  type: 'dynamicGrid',
  label: 'Dynamic Grid',
  key: 'dynamicgrid',
  constName: 'DynamicGrid',
  iconName: 'dynamic-grid',
  dataSchema: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: true
  },
  defaultValues: {
    eventOutputsData: [],
    components: [],
    hasTransformation: true
  }
}, {
  type: 'email',
  label: 'Email',
  key: 'email',
  constName: 'Email',
  iconName: 'email',
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    persistent: true
  }
}, {
  type: 'emailv2',
  label: 'Email',
  key: 'emailv2',
  constName: 'EmailV2',
  iconName: 'email',
  dataSchema: true,
  hasOptions: {
    readOnlyView: true,
    required: false,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {}
}, {
  type: 'error-field',
  label: 'Error',
  key: 'errorField',
  constName: 'Error',
  iconName: 'error',
  deprecated: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    hidden: true
  }
}, {
  type: 'external-content',
  label: 'ExternalContent',
  key: 'externalContentField',
  constName: 'ExternalContent',
  iconName: 'external-content',
  deprecated: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: true,
    input: false,
    label: '',
    protected: false,
    unique: false,
    persistent: true,
    showTitle: false
  }
}, {
  key: 'fg',
  constName: 'FieldGroup',
  type: 'field-group',
  label: 'Field Group',
  iconName: 'field-group',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    label: '',
    components: []
  }
}, {
  type: 'file',
  label: 'File',
  key: 'file',
  constName: 'File',
  deprecated: true,
  iconName: 'file',
  hasOptions: {
    readOnlyView: false,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    dropFilesLabel: 'Drag & drop your files here, or',
    browseLink: 'browse',
    removeLink: 'remove file',
    fileNameLabel: 'File',
    sizeLabel: 'Size',
    dragDropNotSupported: 'File Drag/Drop is not supported for this browser',
    percentageComplete: '% Complete',
    persistent: true,
    startingUploadMessage: 'Starting upload',
    compressFile: false
  }
}, {
  type: 'filev2',
  label: 'File',
  key: 'filev2',
  constName: 'FileV2',
  iconName: 'file',
  hasOptions: {
    readOnlyView: false,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    dropFilesLabel: 'Drag & drop your files here, or',
    browseLink: 'browse',
    removeLink: 'remove file',
    fileNameLabel: 'File',
    sizeLabel: 'Size',
    dragDropNotSupported: 'File Drag/Drop is not supported for this browser',
    percentageComplete: '% Complete',
    persistent: true,
    compressFile: false
  }
}, {
  type: 'filestorage',
  label: 'File Storage',
  key: 'fs',
  constName: 'FileStorage',
  iconName: 'file-storage',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'fs',
    label: '',
    persistent: false,
    fileStorageType: 'sftp',
    method: 'get',
    requestTypes: {
      get: 'GET',
      list: 'LIST',
      put: 'PUT',
      delete: 'DELETE'
    },
    serviceTypes: {
      ftp: 'FTP',
      sftp: 'SFTP'
    },
    fields: [],
    reqInOut: 'Inbound',
    filestorageData: {
      dataOutputObject: {},
      dataInputObject: [{
        from: 'Path',
        key: 'filePath',
        id: '',
        watch: false,
        required: true
      }]
    },
  }
}, {
  type: 'freeFormGrid',
  label: 'Freeform Grid',
  key: 'freeformGrid',
  constName: 'FreeformGrid',
  iconName: 'freeform-grid',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    label: 'Freeform Grid',
    components: [],
    collapsed: false,
    summaryViews: ['Rows', 'Table'],
    selectedSummaryView: 'Rows',
    detailView: 'Accordion',
    summaryViewCols: [],
    values: [],
    customizeButtonStyling: false,
    buttonThemes: [{
      id: 'primary',
      name: 'Primary',
      value: 'primary'
    }, {
      id: 'secondary',
      name: 'Secondary',
      value: 'secondary'
    }, {
      id: 'success',
      name: 'Success',
      value: 'success'
    }, {
      id: 'danger',
      name: 'Danger',
      value: 'danger'
    }, {
      id: 'warning',
      name: 'Warning',
      value: 'warning'
    }, {
      id: 'info',
      name: 'Info',
      value: 'info'
    }, {
      id: 'light',
      name: 'Light',
      value: 'light'
    }, {
      id: 'dark',
      name: 'Dark',
      value: 'dark'
    }, {
      id: 'link',
      name: 'Link',
      value: 'link'
    }],
    createThemeButton: 'primary',
    saveThemeButton: 'primary',
    cancelThemeButton: 'secondary',
    deleteThemeButton: 'danger',
    modalTitle: 'Edit Details',
  }
}, {
  type: 'gauge',
  label: 'Gauge',
  key: 'gauge',
  constName: 'Gauge',
  iconName: 'gauge',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: true,
    input: false,
    label: '',
    protected: false,
    unique: false,
    persistent: true,
    showTitle: false,
    gaugeData: {
      tooltipFormat: '<b>{point.y}</b> (with target at {point.target})',
      height: 300,
      inverted: true,
      dataInputObject: [],
      dataOutputObject: []
    },
  }
}, {
  type: 'hidden',
  label: 'Hidden',
  key: 'hidden',
  constName: 'Hidden',
  iconName: 'hidden',
  dataSchema: true,
  hasOptions: {
    readOnlyView: false,
    required: true,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    persistent: false
  }
}, {
  type: 'htmlelement',
  label: 'HTML Element',
  key: 'html',
  constName: 'HtmlElement',
  iconName: 'html-element',
  alreadyExists: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    input: false,
    tag: 'p',
    attrs: [],
    className: '',
    content: '',
  }
}, {
  type: 'infotable',
  key: 'dt',
  constName: 'DataTable',
  label: 'Data Table',
  iconName: 'data-table',
  dataSchema: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: true,
    input: false,
    key: 'dt',
    label: '',
    protected: false,
    unique: false,
    persistent: false,
    showTitle: false,
    applyFindReplace: false,
    infotableData: {
      dataInputObject: []
    }
  }
}, {
  type: 'initializer',
  label: 'Initializer',
  key: 'init',
  constName: 'Initializer',
  iconName: 'initializer',
  alreadyExists: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    input: false,
    tableView: false,
    key: 'init',
    label: '',
    protected: false,
    unique: false,
    persistent: false,
    linked: {
      inputs: [],
      outputs: []
    },
    initializerData: {
      dataInputObject: [],
      dataOutputObject: []
    },
    triggerType: 'manual'
  }
}, {
  type: 'kpi',
  label: 'KPI',
  key: 'kpi',
  constName: 'KPI',
  iconName: 'kpi',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'kpi',
    multiple: true,
    input: false,
    label: '',
    protected: false,
    unique: false,
    persistent: true,
    showTitle: false,
    kpiData: {
      dataInputObject: [],
      dataOutputObject: []
    }
  }
}, {
  type: 'map',
  label: 'Map',
  key: 'map',
  constName: 'Map',
  deprecated: true,
  iconName: 'map',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'map',
    multiple: true,
    input: false,
    label: '',
    protected: false,
    unique: false,
    persistent: true,
    showTitle: false,
    applyFindReplace: false,
    mapData: {
      tooltipFormat: '{series.name}:{point.y:,.0f}',
      labelFormat: '{point.y:,.0f}',
      height: 300,
      dataInputObject: [],
      dataOutputObject: []
    }
  }
}, {
  type: 'mapv2',
  label: 'Map V2',
  key: 'map',
  constName: 'MapV2',
  iconName: 'map',
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'map',
    label: '',
    persistent: false
  }
}, {
  type: 'survey',
  label: 'Matrix',
  key: 'survey',
  constName: 'Matrix',
  iconName: 'matrix',
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    key: 'survey',
    verticalDisplay: false,
    persistent: true
  }
}, {
  type: 'navigation',
  label: 'Navigation',
  key: 'nav',
  constName: 'Navigation',
  iconName: 'navigation',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    key: 'nav',
    input: false,
    tableView: false,
    label: '',
    unique: false,
    persistent: false,
    navigationData: {
      dataDisplayObject: []
    },
    errorMessage: 'Please check your module and fix fields outlined in red',
    errorTitle: 'Oops - {{ errors }} error(s) have been found!',
    successMessage: 'Success!',
    confirmationButton: 'OK',
    nextButton: 'Next',
    previousButton: 'Previous',
    saveDraftButton: 'Save and Exit',
    submitButton: 'Submit',
    autoSave: false,
    autoValidate: false,
    alwaysValidateAllFields: false,
    allowNavigation: false,
    validateOnOpen: false,
    components: [],
    scrollToTop: true,
    scollTopOffset: 0
  }
}, {
  type: 'number',
  label: 'Number',
  key: 'number',
  constName: 'Number',
  iconName: 'number',
  dataSchema: true,
  alreadyExists: true,
  hasOptions: {
    readOnlyView: false,
    required: true,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    key: 'number',
    interactionType: 'field',
    decimalLimit: 16,
    validate: {},
    step: 2,
    persistent: true
  }
}, {
  type: 'panel',
  label: 'Panel',
  key: 'panel',
  constName: 'Panel',
  iconName: 'panel',
  alreadyExists: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    input: false,
    theme: 'default',
    key: 'panel',
    tableView: false,
    components: [],
    outsideDismiss: true
  }
}, {
  type: 'password',
  label: 'Password',
  key: 'protected',
  constName: 'Password',
  iconName: 'password',
  dataSchema: true,
  hasOptions: {
    readOnlyView: false,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    autofocus: false,
    input: true,
    tableView: false,
    inputType: 'password',
    label: '',
    key: 'protected',
    placeholder: '',
    prefix: '',
    suffix: '',
    protected: true,
    persistent: false,
    hidden: false,
    clearOnHide: true
  }
}, {
  type: 'pdf',
  label: 'Pdf',
  key: 'pdfField',
  constName: 'Pdf',
  iconName: 'pdf',
  deprecated: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: true,
    input: true,
    tableView: true,
    key: 'pdfField',
    label: '',
    protected: false,
    unique: false,
    persistent: true,
    barcode: {
      includeText: true,
      textAlign: 'center',
      textSize: 9,
      height: 22,
      width: 100,
      scale: 3,
      barcodeType: 'gs1-128',
      backgroundColor: 'ffffff'
    },
    triggerType: 'watch',
    integratorData: {
      dataTestObject: [],
      dataInputObject: [],
      dataOutputObject: [],
      dataFrame: [],
      integratorUrl: 'http://localhost:9000/apid/pdfbar?'
    }
  }
}, {
  type: 'phoneNumber',
  label: 'Phone Number',
  key: 'phoneNumberField',
  constName: 'PhoneNumber',
  iconName: 'phone-number',
  dataSchema: true,
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    autofocus: false,
    input: true,
    tableView: true,
    inputType: 'tel',
    inputMask: '(999) 999-9999',
    label: 'Phone Number Field',
    key: 'phoneNumberField',
    placeholder: '',
    prefix: '',
    suffix: '',
    multiple: false,
    protected: false,
    unique: false,
    persistent: true,
    hidden: false,
    defaultValue: '',
    clearOnHide: true,
    validate: {
      required: false
    }
  }
}, {
  type: 'phonenumber-v2',
  label: 'Intl Phone Number',
  key: 'phonenumber',
  constName: 'PhoneNumberV2',
  iconName: 'phone-number',
  dataSchema: true,
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    key: 'phonenumber',
    label: '',
    active: true,
    customClass: '',
    hideCountry: true,
    selectedCountry: 'US',
    phoneType: 0,
    validatePhoneNumber: true,
    protected: false,
    persistent: true,
    hideLabel: false,
    hidden: false,
    disabled: false,
    validate: {
      required: false
    },
    customErrorMessage: 'Please enter a valid phone number'
  }
}, {
  type: 'plaid',
  label: 'Plaid',
  key: 'plaid',
  constName: 'Plaid',
  iconName: 'plaid',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    active: true,
    persistent: true,
    key: 'plaid'
  }
}, {
  type: 'integrator',
  label: 'Plug-In',
  key: 'plug',
  constName: 'Plugin',
  iconName: 'plug-in',
  alreadyExists: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: true,
    input: true,
    tableView: true,
    key: 'plug',
    label: '',
    protected: false,
    unique: false,
    persistent: false,
    linked: {
      inputs: [],
      outputs: []
    },
    integratorData: {
      dataTestObject: [],
      dataInputObject: [],
      dataOutputObject: [],
      dataFrame: [],
      integratorUrl: 'http://localhost:7000/api/v1/credit_scores?'
    },
    triggerType: 'manual',
    serviceType: 'unqork',
    requestType: 'get',
    topLevelArray: false,
    arrayKeyPromote: '',
    assignEmptyValues: true,
    unqorkApi: null,
    service: null,
    preRequestTransform: null,
    prefix: '',
    doNotLookForDataKeyInResponse: true,
    urlPlaceholders: false,
	  allowSingleRecordArray: true
  }
}, {
  type: 'query',
  label: 'Query',
  key: 'queryField',
  constName: 'Query',
  iconName: 'query',
  deprecated: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: true,
    input: true,
    tableView: true,
    key: 'queryField',
    label: '',
    protected: false,
    unique: false,
    persistent: true,
    linked: {
      inputs: [],
      outputs: []
    },
    queryData: {
      dataTestObject: [],
      dataInputObject: [],
      dataOutputObject: [],
      dataFrame: [],
      queryUrl: '/fbu/uapi/analytics/aggregation?agg=(value,$sum,1)'
    }
  }
}, {
  type: 'radio',
  label: 'Radio',
  key: 'radioField',
  constName: 'Radio',
  deprecated: true,
  iconName: 'radio',
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    active: true,
    input: true,
    tableView: true,
    inputType: 'radio',
    label: '',
    key: 'radioField',
    values: [],
    defaultValue: '',
    valueProperty: '',
    dataSrc: 'None',
    labelProperty: 'label',
    protected: false,
    persistent: true,
    hidden: false,
    validate: {
      required: false,
      custom: '',
      customPrivate: false
    }
  }
}, {
  type: 'radiov2',
  label: 'Radio v2',
  key: 'radioFieldv2',
  constName: 'RadioV2',
  iconName: 'radio',
  dataSchema: true,
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    active: true,
    input: true,
    tableView: true,
    inputType: 'radio',
    label: 'Radio Field',
    key: `radiov2Field`,
    values: [],
    defaultValue: '',
    protected: false,
    persistent: true,
    hidden: false,
    validate: {
      required: false,
      custom: '',
      customPrivate: false
    }
  }
}, {
  type: 'repeater',
  label: 'Repeater',
  key: 'rep',
  constName: 'Repeater',
  iconName: 'repeater',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: true
  },
  defaultValues: {
    key: 'rep',
    label: '',
    persistent: false,
    components: []
  }
}, {
  type: 'richtexteditor',
  label: 'Rich Text Editor',
  key: 'rte',
  constName: 'RichTextEditor',
  deprecated: true,
  iconName: 'rich-text-editor',
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
  	key: 'rte',
    label: '',
    persistent: true,
    readOnlyView: false,
    validate: {
      required: false
    },
    texteditorData: {
      dataInputObject: [],
      inputValues: {}
    }
  }
}, {
  type: 'richtexteditorv2',
  label: 'Rich Text Editor',
  key: 'richTextEditor',
  constName: 'RichTextEditorV2',
  iconName: 'rich-text-editor',
  dataSchema: true,
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    key: 'richTextEditor',
    label: '',
    dataInputList: []
  }
}, {
  type: 'select',
  label: 'Dropdown',
  key: 'selectField',
  constName: 'Dropdown',
  deprecated: true,
  iconName: 'dropdown',
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    input: true,
    tableView: true,
    active: true,
    label: '',
    key: 'selectField',
    placeholder: '',
    data: {
      values: [],
      json: '',
      url: '',
      resource: '',
      custom: ''
    },
    preventInnerFilter: false,
    refreshDelay: 250,
    dataSrc: 'values',
    valueProperty: '',
    defaultValue: '',
    refreshOn: '',
    filter: '',
    authenticate: false,
    template: '<span>{{ item.label }}</span>',
    multiple: false,
    protected: false,
    unique: false,
    persistent: true,
    hidden: false,
    validate: {
      required: false
    },
    noValueAdjust: false,
    service: ''
  }
}, {
  type: 'selectv2',
  label: 'DropdownV2',
  key: 'selectFieldv2',
  constName: 'DropdownV2',
  iconName: 'dropdown',
  dataSchema: true,
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    input: true,
    tableView: true,
    label: '',
    key: 'selectField',
    placeholder: '',
    tableshow: false,
    labelKey: 'label',
    valueKey: 'value',
    openOnClick: true,
    data: {
      values: [],
      json: '',
      url: '',
      resource: '',
      custom: ''
    },
    debounce: 400,
    refreshDelay: 250,
    dataSrc: 'values',
    valueProperty: '',
    defaultValue: '',
    refreshOn: '',
    filter: '',
    authenticate: false,
    multiple: false,
    protected: false,
    unique: false,
    persistent: true,
    hidden: false,
    validate: {
      required: false
    },
    noValueAdjust: false,
    removePillLabel: 'Remove'
  }
}, {
  type: 'selectboxes',
  label: 'Checkboxes',
  key: 'selectboxesField',
  constName: 'Checkboxes',
  iconName: 'select-boxes',
  dataSchema: true,
  hasOptions: {
    readOnlyView: false,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    active: true,
    autofocus: false,
    input: true,
    tableView: true,
    label: 'Select Boxes Field',
    key: 'selectboxesField',
    values: [],
    numberOfColumns: 1,
    showSelectAll: false,
    selectAllLabel: 'Select All',
    showNone: false,
    noneLabel: 'None of the above',
    noneValue: 'None',
    showOther: false,
    otherLabel: 'Other',
    otherValue: 'other',
    otherPlaceholder: 'Other',
    otherTextboxKey: 'selectbox-other',
    otherComponentKey: '',
    inline: false,
    protected: false,
    persistent: true,
    dataSource: 'TextField',
    hidden: false,
    validate: {
      required: false
    },
    valueProperty: '',
    dataSrc: 'value',
    labelProperty: ''
  }
}, {
  type: 'setcookie',
  label: 'Set Cookie',
  key: 'setcookie',
  constName: 'SetCookie',
  iconName: 'set-cookie',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    label: '',
    persistent: false,
    maxAge: 86400,
    domainType: 'self',
    path: '/',
    secure: true,
    httpOnly: false,
    sameSite: 'None',
  }
}, {
  type: 'sheet',
  label: 'Sheet',
  key: 'sheet',
  constName: 'Sheet',
  iconName: 'sheet',
  deprecated: true,
  hasOptions: {
    readOnlyView: true,
    required: false,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    label: '',
    components: [],
    hasTransformation: true,
    showContextMenu: true,
    schemadefaultValues: {
      dataSchema: {},
      colHeaders: [],
      columns: [],
      hiddenColumns: {}
    }
  }
}, {
  type: 'signature',
  label: 'Signature',
  key: 'sign',
  constName: 'Signature',
  iconName: 'signature',
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: false
  },
  defaultValues: {
    backgroundColor: 'rgb(245,245,235)',
    footer: 'Sign above',
    height: '150',
    key: 'sign',
    label: 'Signature',
    maxWidth: '2.5',
    minWidth: '0.5',
    penColor: 'black',
    persistent: true,
    placeholder: '',
    protected: false,
    tableView: true,
    width: '100%',
    hideLabel: true
  }
}, {
  type: 'table',
  label: 'Table',
  key: 'table',
  constName: 'Table',
  iconName: 'table',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    clearOnHide: false,
    input: false,
    key: 'table',
    numRows: 3,
    numCols: 3,
    rows: [
      [{
        components: []
      }, {
        components: []
      }, {
        components: []
      }],
      [{
        components: []
      }, {
        components: []
      }, {
        components: []
      }],
      [{
        components: []
      }, {
        components: []
      }, {
        components: []
      }]
    ],
    header: [],
    caption: '',
    striped: false,
    bordered: false,
    hover: false,
    condensed: false,
    tableView: false,
    type: 'table',
    label: ''
  }
}, {
  type: 'textarea',
  label: 'Text Area',
  key: 'textarea',
  constName: 'TextArea',
  iconName: 'text-area',
  dataSchema: true,
  alreadyExists: true,
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    autofocus: true,
    input: true,
    tableView: true,
    label: 'Text Area Field',
    placeholder: '',
    prefix: '',
    suffix: '',
    rows: 3,
    multiple: false,
    defaultValue: '',
    protected: false,
    persistent: true,
    hidden: false,
    wysiwyg: false,
    clearOnHide: true,
    spellcheck: true,
    validate: {
      required: false,
      minLength: '',
      maxLength: '',
      pattern: '',
      custom: ''
    },
  }
}, {
  type: 'textfield',
  label: 'Text Field',
  key: 'textfield',
  constName: 'TextField',
  iconName: 'text-field',
  dataSchema: true,
  alreadyExists: true,
  hasOptions: {
    readOnlyView: true,
    required: true,
    disabled: true,
    hideComponentLabel: true
  },
  defaultValues: {
    active: true,
    persistent: true,
    label: 'Text Field',
  }
}, {
  type: 'timer',
  label: 'Timer',
  key: 'timer',
  constName: 'Timer',
  iconName: 'timer',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: true
  },
  defaultValues: {
    label: '',
    persistent: false,
    countUp: false,
  }
}, {
  type: 'tracker',
  label: 'Tracker',
  key: 'trackerField',
  constName: 'Tracker',
  iconName: 'tracker',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: true,
    input: true,
    tableView: true,
    key: 'trackerField',
    label: '',
    protected: false,
    unique: false,
    persistent: true,
    trackUser: true,
    trackValue: true,
    trackerData: {
      dataInputObject: []
    },
    triggerType: 'watch'
  }
}, {
  type: 'transformer',
  label: 'Calculator',
  key: 'calc',
  constName: 'Calculator',
  iconName: 'transformer',
  alreadyExists: true,
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    input: false,
    tableView: false,
    key: 'calc',
    label: '',
    protected: false,
    unique: false,
    persistent: false,
    linked: {
      inputs: [],
      outputs: []
    },
    transformerData: {
      dataTestObject: [],
      dataInputObject: [],
      dataOutputObject: [],
      dataFrame: []
    },
    triggerType: 'manual'
  }
}, {
  type: 'inlineGrid',
  label: 'Uniform Grid',
  key: 'uniformGrid',
  constName: 'UniformGrid',
  iconName: 'uniform-grid',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: true
  },
  defaultValues: {
    key: 'uniformGrid',
    label: 'Uniform Grid',
    components: [],
    collapsed: false,
    editOption: 'Full grid editable',
    displayPattern: 'Inline',
    heightOption: 'Auto height',
    customizeButtonStyling: false,
    allowSelectEdditing: false,
    buttonThemes: [
      {
        id: 'primary',
        name: 'Primary',
        value: 'primary'
      },
      {
        id: 'secondary',
        name: 'Secondary',
        value: 'secondary'
      },
      {
        id: 'success',
        name: 'Success',
        value: 'success'
      },
      {
        id: 'danger',
        name: 'Danger',
        value: 'danger'
      },
      {
        id: 'warning',
        name: 'Warning',
        value: 'warning'
      },
      {
        id: 'info',
        name: 'Info',
        value: 'info'
      },
      {
        id: 'light',
        name: 'Light',
        value: 'light'
      },
      {
        id: 'dark',
        name: 'Dark',
        value: 'dark'
      },
      {
        id: 'link',
        name: 'Link',
        value: 'link'
      }
    ],
    createThemeButton: 'primary',
    saveThemeButton: 'primary',
    editThemeButton: 'primary',
    deleteThemeButton: 'primary',
    height: 400
  }
}, {
  type: 'viewgrid',
  label: 'View Grid',
  key: 'vg',
  constName: 'ViewGrid',
  iconName: 'view-grid',
  hasOptions: {
    readOnlyView: false,
    required: false,
    disabled: false,
    hideComponentLabel: false
  },
  defaultValues: {
    multiple: false,
    input: false,
    key: 'vg',
    label: '',
    protected: false,
    unique: false,
    persistent: true,
    showTitle: false,
    sortByColumns: true,
    viewgridData: {
      dataDisplayObject: [],
      dataInputObject: [],
      dataOutputObject: []
    }
  }
}]