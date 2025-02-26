import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Form = () => {
    // State for supplier type, selected state, and selected providers
    const [supplierType, setSupplierType] = React.useState('');
    const [selectedState, setSelectedState] = React.useState('');
    const [selectedElectricityProvider, setSelectedElectricityProvider] = React.useState('');
    const [selectedGasProvider, setSelectedGasProvider] = React.useState('');
    const [showElectricitySection, setShowElectricitySection] = React.useState(false);
    const [showGasSection, setShowGasSection] = React.useState(false);

    // Supplier type options
    const supplierOptions = [
        { value: '', label: 'Want Supplier for?' },
        { value: 'electricity', label: 'Electricity' },
        { value: 'gas', label: 'Gas' },
        { value: 'both', label: 'Both' }
    ];

    // State options with supplier type mapping
    const stateOptions = [
        { value: 'AR', electricity: true, gas: true },
        { value: 'CA', electricity: true, gas: true },
        { value: 'CT', electricity: true, gas: true },
        { value: 'DE', electricity: true, gas: true },
        { value: 'GA', electricity: true, gas: true },
        { value: 'IL', electricity: true, gas: true },
        { value: 'IN', electricity: true, gas: true },
        { value: 'MA', electricity: true, gas: true },
        { value: 'MD', electricity: true, gas: true },
        { value: 'ME', electricity: true, gas: true },
        { value: 'MI', electricity: true, gas: true },
        { value: 'NH', electricity: true, gas: true },
        { value: 'NJ', electricity: true, gas: true },
        { value: 'NY', electricity: true, gas: true },
        { value: 'OH', electricity: true, gas: true },
        { value: 'PA', electricity: true, gas: true },
        { value: 'TX', electricity: true, gas: true },
        { value: 'VA', electricity: true, gas: true }
    ];





    // Arkansas Electricity Providers
    const arkansasElectricityProviders = [
        { value: 'entergy', label: 'Entergy Arkansas' },
        { value: 'electric-cooperatives', label: 'Electric Cooperatives of Arkansas' },
        { value: 'swepco', label: 'AEP Southwestern Electric Power Company (SWEPCO)' },
        { value: 'oge', label: 'Oklahoma Gas & Electric (OG&E)' },
        { value: 'municipal', label: 'Municipal Utilities' }
    ];

    // California Electricity Providers
    const californiaElectricityProviders = [
        { value: 'pge', label: 'Pacific Gas and Electric Company (PG&E)' },
        { value: 'sce', label: 'Southern California Edison (SCE)' },
        { value: 'sdge', label: 'San Diego Gas & Electric (SDG&E)' },
        { value: 'smud', label: 'Sacramento Municipal Utility District (SMUD)' },
        { value: 'ladwp', label: 'Los Angeles Department of Water and Power (LADWP)' },
        { value: 'anaheim', label: 'Anaheim Public Utilities' },
        { value: 'riverside', label: 'Riverside Public Utilities' },
        { value: 'burbank', label: 'Burbank Water and Power' },
        { value: 'glendale', label: 'Glendale Water and Power' },
        { value: 'pasadena', label: 'Pasadena Water and Power' },
        { value: 'svp', label: 'Silicon Valley Power' },
        { value: 'iid', label: 'Imperial Irrigation District' },
        { value: 'mid', label: 'Modesto Irrigation District' },
        { value: 'tid', label: 'Turlock Irrigation District' }
    ];

    // Connecticut Electricity Providers
    const connecticutElectricityProviders = [
        { value: 'eversource', label: 'Eversource Energy' },
        { value: 'ui', label: 'United Illuminating Company (UI)' }
    ];

    // Delaware Electricity Providers
    const delawareElectricityProviders = [
        { value: 'delmarva', label: 'Delmarva Power' },
        { value: 'dec', label: 'Delaware Electric Cooperative' },
        { value: 'demec', label: 'Delaware Municipal Electric Corporation' }
    ];

    // Delaware Gas Providers
    const delawareGasProviders = [
        { value: 'delmarva', label: 'Delmarva Power' },
        { value: 'chesapeake', label: 'Chesapeake Utilities' },
        { value: 'ugi', label: 'UGI Energy Services' }
    ];

    // Arkansas Gas Providers
    const arkansasGasProviders = [
        { value: 'oklahoma-gas', label: 'Arkansas Oklahoma Gas Corporation' },
        { value: 'centerpoint', label: 'CenterPoint Energy Arkansas G' },
    ];

    // California Gas Providers
    const californiaGasProviders = [
        { value: 'pge', label: 'Pacific Gas and Electric Company (PG&E)' },
        { value: 'socalgas', label: 'Southern California Gas Company (SoCalGas)' },
        { value: 'sdge', label: 'San Diego Gas & Electric (SDG&E)' }
    ];

    // Connecticut Gas Providers
    const connecticutGasProviders = [
        { value: 'eversource', label: 'Eversource Energy' },
        { value: 'cng', label: 'Connecticut Natural Gas Corporation (CNG)' },
        { value: 'scg', label: 'Southern Connecticut Gas Company (SCG)' }
    ];

    // Georgia Electricity Providers
    const georgiaElectricityProviders = [
        { value: 'georgia-power', label: 'Georgia Power' },
        { value: 'emc', label: 'Electric Membership Corporations (EMCs)' }
    ];

    // Georgia Gas Providers
    const georgiaGasProviders = [
        { value: 'atlanta-gas', label: 'Atlanta Gas Light' },
        { value: 'gs', label: 'Gas South' },
        { value: 'ie', label: 'Infinite Energy' },
        { value: 'scana', label: 'SCANA Energy' }
    ];

    // Illinois Electricity Providers
    const illinoisElectricityProviders = [
        { value: 'ameren', label: 'Ameren Illinois' },
        { value: 'comed', label: 'Commonwealth Edison (ComEd)' },
        { value: 'midamerican', label: 'MidAmerican Energy' },
        { value: 'mt-carmel', label: 'Mt. Carmel Public Utility' },
        { value: 'wiec', label: 'Western Illinois Electrical Coop.' }
    ];

    // Illinois Gas Providers
    const illinoisGasProviders = [
        { value: 'ameren', label: 'Ameren Illinois' },
        { value: 'nicor', label: 'Nicor Gas' },
        { value: 'peoples-gas', label: 'Peoples Gas' },
        { value: 'north-shore', label: 'North Shore Gas' },
        { value: 'midamerican', label: 'MidAmerican Energy' },
        { value: 'mt-carmel', label: 'Mt. Carmel Public Utility' }
    ];

    // Indiana Electricity Providers
    const indianaElectricityProviders = [
        { value: 'aes-indiana', label: 'AES Indiana' },
        { value: 'centerpoint', label: 'CenterPoint Energy (formerly Vectren)' },
        { value: 'duke-energy', label: 'Duke Energy Indiana' },
        { value: 'hoosier-energy', label: 'Hoosier Energy' },
        { value: 'indiana-electric-coops', label: 'Indiana Electric Cooperatives' },
        { value: 'indiana-michigan-power', label: 'Indiana Michigan Power (I&M)' },
        { value: 'impa', label: 'Indiana Municipal Power Agency (IMPA)' },
        { value: 'nipsco', label: 'Northern Indiana Public Service Company (NIPSCO)' },
        { value: 'wvpa', label: 'Wabash Valley Power Alliance' }
    ];

    // Indiana Gas Providers
    const indianaGasProviders = [
        { value: 'centerpoint', label: 'CenterPoint Energy (formerly Vectren)' },
        { value: 'citizens-gas', label: 'Citizens Gas' },
        { value: 'ingc', label: 'Indiana Natural Gas Corporation' },
        { value: 'midwest-gas', label: 'Midwest Natural Gas Corporation' },
        { value: 'nipsco', label: 'Northern Indiana Public Service Company (NIPSCO)' },
        { value: 'ovgc', label: 'Ohio Valley Gas Corporation' },
        { value: 'sycamore-gas', label: 'Sycamore Gas Company' }
    ];

    // Massachusetts Electricity Providers
    const massachusettsElectricityProviders = [
        { value: 'eversource', label: 'Eversource Energy' },
        { value: 'national-grid', label: 'National Grid' },
        { value: 'unitil', label: 'Unitil Corporation' },
        { value: 'holyoke-gas-electric', label: 'Holyoke Gas & Electric' },
        { value: 'enel-north-america', label: 'Enel North America' }
    ];

    // Massachusetts Gas Providers
    const massachusettsGasProviders = [
        { value: 'eversource', label: 'Eversource Energy' },
        { value: 'national-grid', label: 'National Grid' },
        { value: 'berkshire-gas', label: 'Berkshire Gas Company' },
        { value: 'liberty-utilities', label: 'Liberty Utilities' },
        { value: 'unitil', label: 'Unitil Corporation' },
        { value: 'holyoke-gas-electric', label: 'Holyoke Gas & Electric' },
        { value: 'enel-north-america', label: 'Enel North America' }
    ];

    // Maryland Electricity Providers
    const marylandElectricityProviders = [
        { value: 'bge', label: 'Baltimore Gas & Electric Company (BGE)' },
        { value: 'pepco', label: 'Potomac Electric Power Company (Pepco)' },
        { value: 'delmarva', label: 'Delmarva Power & Light' }
    ];

    // Maryland Gas Providers
    const marylandGasProviders = [
        { value: 'bge', label: 'Baltimore Gas & Electric Company (BGE)' },
        { value: 'washington-gas', label: 'Washington Gas' }
    ];

    // Maine Electricity Providers
    const maineElectricityProviders = [
        { value: 'cmp', label: 'Central Maine Power (CMP)' },
        { value: 'versant', label: 'Versant Power' },
        { value: 'emec', label: 'Eastern Maine Electric Cooperative' }
    ];

    // Maine Gas Providers
    const maineGasProviders = [
        { value: 'maine-natural-gas', label: 'Maine Natural Gas' },
        { value: 'unitil', label: 'Unitil' }
    ];

    // Michigan Electricity Providers
    const michiganElectricityProviders = [
        { value: 'dte', label: 'DTE Energy' },
        { value: 'consumers-energy', label: 'Consumers Energy' },
        { value: 'indiana-michigan-power', label: 'Indiana Michigan Power' },
        { value: 'we-energies', label: 'We Energies (Wisconsin Electric Power Company)' },
        { value: 'great-lakes-energy', label: 'Great Lakes Energy' }
    ];

    // Michigan Gas Providers
    const michiganGasProviders = [
        { value: 'consumers-energy', label: 'Consumers Energy' },
        { value: 'dte-gas', label: 'DTE Gas' },
        { value: 'michigan-gas-utilities', label: 'Michigan Gas Utilities' },
        { value: 'semco-energy', label: 'SEMCO Energy' }
    ];

    // New Hampshire Electricity Providers
    const newHampshireElectricityProviders = [
        { value: 'eversource', label: 'Eversource Energy' },
        { value: 'liberty-utilities', label: 'Liberty Utilities' },
        { value: 'nhec', label: 'New Hampshire Electric Cooperative (NHEC)' },
        { value: 'unitil', label: 'Unitil Corporation' }
    ];

    // New Hampshire Gas Providers
    const newHampshireGasProviders = [
        { value: 'liberty-utilities', label: 'Liberty Utilities' },
        { value: 'unitil', label: 'Unitil Corporation' }
    ];

    // New Jersey Electricity Providers
    const newJerseyElectricityProviders = [
        { value: 'pseg', label: 'Public Service Electric and Gas (PSE&G)' },
        { value: 'jcpl', label: 'Jersey Central Power & Light (JCP&L)' },
        { value: 'ace', label: 'Atlantic City Electric (ACE)' },
        { value: 'reco', label: 'Rockland Electric Company (RECO)' }
    ];

    // New Jersey Gas Providers
    const newJerseyGasProviders = [
        { value: 'pseg', label: 'Public Service Electric and Gas (PSE&G)' },
        { value: 'njng', label: 'New Jersey Natural Gas (NJNG)' },
        { value: 'south-jersey-gas', label: 'South Jersey Gas' },
        { value: 'elizabethtown-gas', label: 'Elizabethtown Gas' }
    ];

    // New York Electricity Providers
    const newYorkElectricityProviders = [
        { value: 'con-edison', label: 'Consolidated Edison (Con Edison)' },
        { value: 'national-grid', label: 'National Grid' },
        { value: 'nyseg', label: 'New York State Electric & Gas (NYSEG)' },
        { value: 'central-hudson', label: 'Central Hudson Gas & Electric' },
        { value: 'rge', label: 'Rochester Gas & Electric (RG&E)' },
        { value: 'orange-rockland', label: 'Orange & Rockland Utilities' },
        { value: 'pseg-long-island', label: 'PSEG Long Island' },
        { value: 'nypa', label: 'New York Power Authority (NYPA)' },
        { value: 'lipa', label: 'Long Island Power Authority (LIPA)' }
    ];

    // New York Gas Providers
    const newYorkGasProviders = [
        { value: 'con-edison', label: 'Consolidated Edison (Con Edison)' },
        { value: 'national-grid', label: 'National Grid' },
        { value: 'nyseg', label: 'New York State Electric & Gas (NYSEG)' },
        { value: 'central-hudson', label: 'Central Hudson Gas & Electric' },
        { value: 'rge', label: 'Rochester Gas & Electric (RG&E)' },
        { value: 'orange-rockland', label: 'Orange & Rockland Utilities' }
    ];

    // Ohio Electricity Providers
    const ohioElectricityProviders = [
        { value: 'aep-ohio', label: 'AEP Ohio' },
        { value: 'duke-energy-ohio', label: 'Duke Energy Ohio' },
        { value: 'aes-ohio', label: 'AES Ohio (formerly Dayton Power & Light)' },
        { value: 'firstenergy-ohio', label: 'FirstEnergy\'s Ohio Utilities (Ohio Edison, The Illuminating Company, Toledo Edison)' }
    ];

    // Ohio Gas Providers
    const ohioGasProviders = [
        { value: 'columbia-gas', label: 'Columbia Gas of Ohio' },
        { value: 'dominion-energy', label: 'Dominion Energy Ohio' },
        { value: 'duke-energy-ohio', label: 'Duke Energy Ohio' },
        { value: 'vectren', label: 'Vectren Energy Delivery of Ohio' }
    ];

    // Pennsylvania Electricity Providers
    const pennsylvaniaElectricityProviders = [
        { value: 'peco', label: 'PECO Energy' },
        { value: 'ppl', label: 'PPL Electric Utilities' },
        { value: 'pseg-long-island', label: 'PSEG Long Island' },
        { value: 'ugi', label: 'UGI Utilities' },
        { value: 'met-ed', label: 'Met-Ed' },
        { value: 'penelec', label: 'Penelec' },
        { value: 'west-penn-power', label: 'West Penn Power' },
        { value: 'penn-power', label: 'Penn Power' }
    ];

    // Pennsylvania Gas Providers
    const pennsylvaniaGasProviders = [
        { value: 'columbia-gas', label: 'Columbia Gas' },
        { value: 'peco-gas', label: 'PECO Gas' },
        { value: 'peoples-natural-gas', label: 'Peoples Natural Gas' },
        { value: 'pgw', label: 'Philadelphia Gas Works' },
        { value: 'ugi', label: 'UGI Utilities' },
        { value: 'national-fuel-gas', label: 'National Fuel Gas' },
        { value: 'pike-county', label: 'Pike County Light & Power' },
        { value: 'valley-energy', label: 'Valley Energy' }
    ];

    // Texas Electricity Providers
    const texasElectricityProviders = [
        { value: 'oncor', label: 'Oncor Electric Delivery' },
        { value: 'centerpoint', label: 'CenterPoint Energy' },
        { value: 'tnmp', label: 'Texas-New Mexico Power (TNMP)' },
        { value: 'aep-texas', label: 'AEP Texas' },
        { value: 'reliant', label: 'Reliant Energy' },
        { value: 'direct-energy', label: 'Direct Energy' },
        { value: 'green-mountain', label: 'Green Mountain Energy' },
        { value: 'txu', label: 'TXU Energy' }
    ];

    // Texas Gas Providers
    const texasGasProviders = [
        { value: 'atmos', label: 'Atmos Energy' },
        { value: 'texas-gas-service', label: 'Texas Gas Service' },
        { value: 'lone-star-gas', label: 'Lone Star Gas Company' },
        { value: 'centerpoint', label: 'CenterPoint Energy' }
    ];

    // Virginia Electricity Providers
    const virginiaElectricityProviders = [
        { value: 'dominion', label: 'Dominion Energy Virginia' },
        { value: 'appalachian-power', label: 'Appalachian Power' },
        { value: 'novec', label: 'Northern Virginia Electric Cooperative (NOVEC)' },
        { value: 'rappahannock', label: 'Rappahannock Electric Cooperative' },
        { value: 'odec', label: 'Old Dominion Electric Cooperative' }
    ];

    // Virginia Gas Providers
    const virginiaGasProviders = [
        { value: 'dominion', label: 'Dominion Energy Virginia' },
        { value: 'columbia-gas-va', label: 'Columbia Gas of Virginia' },
        { value: 'washington-gas', label: 'Washington Gas' }
    ];




    // Handle supplier type change
    const handleSupplierTypeChange = (event) => {
        const newSupplierType = event.target.value;
        setSupplierType(newSupplierType);
        // Reset state and providers when supplier type changes
        setSelectedState('');
        setSelectedElectricityProvider('');
        setSelectedGasProvider('');

        // Update section visibility
        setShowElectricitySection(newSupplierType === 'electricity' || newSupplierType === 'both');
        setShowGasSection(newSupplierType === 'gas' || newSupplierType === 'both');
    };

    // Handle state change
    const handleStateChange = (event) => {
        const newState = event.target.value;
        setSelectedState(newState);
        // Reset providers when state changes
        setSelectedElectricityProvider('');
        setSelectedGasProvider('');
    };

    // Handle electricity provider change
    const handleElectricityProviderChange = (event) => {
        setSelectedElectricityProvider(event.target.value);
    };

    // Handle gas provider change
    const handleGasProviderChange = (event) => {
        setSelectedGasProvider(event.target.value);
    };

    // Filter states based on supplier type
    const filteredStates = stateOptions.filter(state => {
        if (!supplierType || supplierType === '') return false;

        if (supplierType === 'electricity') return state.electricity;
        if (supplierType === 'gas') return state.gas;
        if (supplierType === 'both') return state.electricity && state.gas;

        return false;
    });

    return (
        <>

            <Box>

                <Grid
                    container
                    spacing={2}
                    mt={4}
                    sx={{
                        alignItems: 'center',
                        justifyContent: "center",
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <TextField
                            sx={{
                                width: "330px",
                            }}
                            placeholder="First Name"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <TextField
                            sx={{
                                width: "330px",
                            }}
                            placeholder="Last Name"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <TextField
                            sx={{
                                width: "330px",
                            }}
                            placeholder="Email Address"
                        />




                    </Grid>



                </Grid>



                <Grid
                    container
                    spacing={2}
                    mt={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: "center",


                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <TextField

                            sx={{
                                width: "330px",
                            }}
                            placeholder="Phone No"
                        />



                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <TextField
                            sx={{
                                width: "330px",
                            }}
                            placeholder="Street Address"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <TextField
                            sx={{
                                width: "330px",
                            }}
                            placeholder="City"
                        />




                    </Grid>



                </Grid>
                <Grid
                    container
                    spacing={2}
                    mt={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: "center",
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <TextField
                            sx={{
                                width: "330px",
                            }}
                            placeholder="Zip Code"
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <FormControl sx={{
                            width: "330px",
                        }}>
                            <Select
                                value={supplierType}
                                onChange={handleSupplierTypeChange}
                                displayEmpty
                            >
                                {supplierOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <FormControl sx={{
                            width: "330px",
                        }}>
                            <Select
                                value={selectedState}
                                onChange={handleStateChange}
                                displayEmpty
                                disabled={!supplierType}
                            >
                                <MenuItem value="">State</MenuItem>
                                {filteredStates.map((state) => (
                                    <MenuItem key={state.value} value={state.value}>
                                        {state.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                {showElectricitySection && (
                    <Grid
                        container
                        spacing={2}
                        mt={2}
                        sx={{
                            alignItems: 'center',
                            justifyContent: "center",
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={4}
                        >
                            <TextField
                                sx={{
                                    width: "330px",
                                }}
                                placeholder="Electricity Account Number"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={4}
                        >
                            <TextField
                                sx={{
                                    width: "330px",
                                }}
                                placeholder="Electricity Bill Amount"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={4}
                        >

                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'AR' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl sx={{
                                        width: "330px",
                                    }}>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {arkansasElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'CA' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {californiaElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'CT' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {connecticutElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'DE' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {delawareElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'GA' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {georgiaElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'IL' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {illinoisElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'IN' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {indianaElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'MA' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {massachusettsElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'MD' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {marylandElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'ME' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {maineElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'MI' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {michiganElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'NH' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {newHampshireElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'NJ' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {newJerseyElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'NY' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {newYorkElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'OH' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {ohioElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'PA' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {pennsylvaniaElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'TX' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {texasElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'electricity' || supplierType === 'both') && selectedState === 'VA' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedElectricityProvider}
                                            onChange={handleElectricityProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Electricity Provider</MenuItem>
                                            {virginiaElectricityProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                )}
                {showGasSection && (
                    <Grid
                        container
                        spacing={2}
                        mt={2}
                        sx={{
                            alignItems: 'center',
                            justifyContent: "center",
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={4}
                        >
                            <TextField
                                sx={{
                                    width: "330px",
                                }}
                                placeholder="Gas Account Number"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={4}
                        >
                            <TextField
                                sx={{
                                    width: "330px",
                                }}
                                placeholder="Gas Bill Amount"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={4}
                        >

                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'AR' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl sx={{
                                        width: "330px",
                                    }}>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {arkansasGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'CA' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {californiaGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'CT' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {connecticutGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'DE' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {delawareGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'GA' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {georgiaGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'IL' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {illinoisGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'IN' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {indianaGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'MA' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {massachusettsGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'MD' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {marylandGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'ME' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {maineGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'MI' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {michiganGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'NH' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {newHampshireGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'NJ' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {newJerseyGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'NY' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {newYorkGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'OH' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {ohioGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'PA' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {pennsylvaniaGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'TX' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {texasGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                            {(supplierType === 'gas' || supplierType === 'both') && selectedState === 'VA' && (
                                <Grid
                                    item
                                    xs={12}
                                    md={supplierType === 'both' ? 6 : 4}
                                >
                                    <FormControl fullWidth>
                                        <Select
                                            value={selectedGasProvider}
                                            onChange={handleGasProviderChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="">Select Gas Provider</MenuItem>
                                            {virginiaGasProviders.map((provider) => (
                                                <MenuItem key={provider.value} value={provider.value}>
                                                    {provider.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )}
                        </Grid>

                    </Grid>
                )}
            </Box>


            <Box>
                <Grid
                    container
                    spacing={2}
                    mt={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: "center",
                        padding: { xs: "40px", md: "0" }


                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Typography style={{
                            fontFamily: "Outfit",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "25px",
                            color: "#3C3C3C"
                        }}>
                            Are you currently receiving any assistance, such as LIHEAP?*
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Box sx={{
                            display: "flex"
                        }}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="YES" />
                            <FormControlLabel required control={<Checkbox />} label="NO" />
                        </Box>



                    </Grid>



                </Grid>
                <Grid
                    container
                    spacing={2}
                    mt={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: "center",


                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Typography style={{
                            fontFamily: "Outfit",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "25px",
                            color: "#3C3C3C"
                        }}>
                            Do you agree to switch your supplier?*
                        </Typography>




                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Box sx={{
                            display: "flex"
                        }}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="YES" />
                            <FormControlLabel required control={<Checkbox />} label="NO" />
                        </Box>



                    </Grid>



                </Grid>
                <Grid
                    container
                    spacing={2}
                    mt={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: "center",
                        padding: { xs: "40px", md: "0" }

                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Typography style={{
                            fontFamily: "Outfit",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "25px",
                            color: "#3C3C3C"
                        }}>
                            Do you authorize a sales rep to verify your information?*
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Box sx={{
                            display: "flex"
                        }}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="YES" />
                            <FormControlLabel required control={<Checkbox />} label="NO" />
                        </Box>



                    </Grid>



                </Grid>

            </Box>



            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button
                    style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "18px",
                        lineHeight: "25px",
                        color: "#FFFFFF",
                        backgroundColor: "#98C447",
                        width: "250px",
                        height: "45px",
                        margin: "20px 0px 25px 0px",
                        textTransform: "none"
                    }}
                >
                    Enroll Now
                </Button>
            </Box>


        </>
    )
}

export default Form;






