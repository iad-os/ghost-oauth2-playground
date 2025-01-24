import { Box, Button, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid2';

type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  dateBirth: Date;
};

const formSchema = Yup.object().shape<Record<keyof FormType, Yup.AnySchema>>({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  dateBirth: Yup.date().required(),
});

const FormPage = () => {
  const formik = useFormik<Partial<FormType>>({
    initialValues: {},
    validationSchema: formSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 4));
    },
  });

  return (
    <Box p={5}>
      <Typography variant="h4">Form example</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid p={2} size={{ xs: 12, sm: 6 }}>
            <TextField
              label={'First Name'}
              type="text"
              fullWidth
              error={!!formik.errors.firstName}
              helperText={formik.errors.firstName}
              {...formik.getFieldProps('firstName')}
            />
          </Grid>
          <Grid p={2} size={{ xs: 12, sm: 6 }}>
            <TextField
              label={'Last Name'}
              type="text"
              fullWidth
              error={!!formik.errors.lastName}
              helperText={formik.errors.lastName}
              {...formik.getFieldProps('lastName')}
            />
          </Grid>
          <Grid p={2} size={{ xs: 12, sm: 6 }}>
            <TextField
              label={'Email'}
              type="email"
              fullWidth
              error={!!formik.errors.email}
              helperText={formik.errors.email}
              {...formik.getFieldProps('email')}
            />
          </Grid>
          <Grid p={2} size={{ xs: 12, sm: 6 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of birth"
                sx={{ width: '100%' }}
                slotProps={{
                  textField: {
                    error: !!formik.errors.dateBirth,
                    helperText: formik.errors.dateBirth,
                  },
                }}
                maxDate={dayjs()}
                value={dayjs(formik.values.dateBirth)}
                onChange={(ev: dayjs.Dayjs | null) => {
                  ev && formik.setFieldValue('dateBirth', ev.toDate());
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid
            p={2}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'flex-end'}
          >
            <Button variant={'contained'} type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default FormPage;
