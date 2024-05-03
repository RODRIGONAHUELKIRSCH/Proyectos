using Microsoft.VisualBasic;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.Window;
using System.Windows.Forms;
using System.Collections;
using System;
using System.CodeDom;

namespace cbu
{
    public partial class Form1 : Form
    {

        List<string> cbu = new List<string>();
        public Form1()
        {
            InitializeComponent();
        }

        private void lblsucursal_Click(object sender, EventArgs e)
        {

        }

        //Chequeo que solo ingrese numeros
        private void tb1_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!(char.IsNumber(e.KeyChar)) && (e.KeyChar != (char)Keys.Back))
            {
                e.Handled = true;
                MessageBox.Show("Advertencia!!", "Solo se permite el ingreso de numeros.", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }

        private void lblcbu_Click(object sender, EventArgs e)
        {
            tb1.Focus();
        }

        private void lblbanco_Click(object sender, EventArgs e)
        {

        }

        private void lblnrover1_Click(object sender, EventArgs e)
        {

        }

        private void lblnrocuenta_Click(object sender, EventArgs e)
        {

        }

        private void lblnrover2_Click(object sender, EventArgs e)
        {

        }

        //Opcionalidad para a traves de un dialogresult informarle de que manera quiere realizar la verificacion del cbu
        //si => verificacion completa
        //no => verificacion por lotes

        private void btncargararchivo_Click(object sender, EventArgs e)
        {
            cargararchivo();
            tb1.Enabled = false;
            string mensaje = @"Seleccione ""Si"" para verificacion completa" +"\n" +@"de lo contrario seleccione ""No""";
            string titulo = @"Selecione ""Si"" o ""No""";
            MessageBoxButtons mbb = MessageBoxButtons.YesNo;
            
            DialogResult resultado;

            resultado = MessageBox.Show(this, mensaje, titulo, mbb,
            MessageBoxIcon.Question, MessageBoxDefaultButton.Button1 );



            if (resultado == DialogResult.Yes)
            {
                if (cbu.Count == 0) MessageBox.Show("No hay cbus que leer", "Ha ocurrido un error", MessageBoxButtons.OK, MessageBoxIcon.Error);         
                else algoritmocompletoarchivo(cbu);
            }
            else if (resultado == DialogResult.No)
            {
                if(cbu.Count==0) MessageBox.Show("No hay cbus que leer", "Ha ocurrido un error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                else algoritmoporlotesarchivo(cbu);
            }
        }

        //Chequeo si efectivamente la cadena enviada contiene solamente numeros

        private void btnchekear_Click(object sender, EventArgs e)
        {
            if (tb1.Text.Length > 22 || tb1.Text.Length < 22)
            {
                MessageBox.Show("El numero no tiene 22 digitos por lo tanto no es un cbu", "Advertencia!!", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                tb1.Text = string.Empty;
                if (tb1.Enabled == false)
                {
                    tb1.Enabled = true;
                }
            }
            else
            {
                algoritmocompleto();
            }
        }

        //Carga del archivo con los cbus

        void cargararchivo()
        {
            try {
                FileInfo f = new FileInfo("C:\\Users\\mrnaa\\OneDrive\\Desktop\\cbu.txt");
                FileStream fs = f.Open(FileMode.OpenOrCreate, FileAccess.Read, FileShare.None);
                string lector = null;
                StreamReader sr = new StreamReader(fs);
                while ((lector = sr.ReadLine()) != null)
                {
                    cbu.Add(lector);
                }
                fs.Close();
                sr.Close();
          

            }
            catch (Exception e){
                MessageBox.Show(e.Message, "Ha ocurrido un error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                
            }            

        }

        //Logica de lectura y verificacion completa del cbu insertado en el textbox

        void algoritmocompleto()
        {
            resetlblvalues();
            char[] s = tb1.Text.ToCharArray(0, tb1.TextLength);
            int[] bancosucursal = new int[7];
            string banco = null;
            string sucursal = null;
            string nroverif1 = null, numerocuenta = null, nroverif2 = null;
            int nrover1 = 0;
            int[] nrocuenta = new int[13];
            int nrover2 = 0;

            for (int i = 0; i < 7; i++)
            {
                bancosucursal[i] = Int32.Parse(s.GetValue(i).ToString());


            }
            nrover1 = Int32.Parse(s.GetValue(7).ToString());
            int w = 0;
            for (int i = 8; i < 21; i++)
            {

                nrocuenta[w] = Int32.Parse(s.GetValue(i).ToString());

                w++;
            }

            nrover2 = Int32.Parse(s.GetValue(21).ToString());

            int[] arr = { 7, 1, 3, 9, 7, 1, 3 };
            int[] suma = new int[7];
            for (int i = 0; i < bancosucursal.Length; i++)
            {
                suma[i] = bancosucursal[i] * arr[i];
            }
            int cont = 0;
            const int diferencia = 10;
            for (int i = 0; i < suma.Length; i++)
            {
                cont += suma[i];
            }

            string k = $"{cont}";
            int resultado = Int32.Parse(k.Last().ToString());

            int aux = diferencia - resultado;

            int[] arr2 = { 3, 9, 7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 3 };
            int[] suma2 = new int[13];
            for (int i = 0; i < suma2.Length; i++)
            {
                suma2[i] = nrocuenta[i] * arr2[i];
            }
            int cont2 = 0;
            for (int i = 0; i < suma2.Length; i++)
            {
                cont2 += suma2[i];
            }
            string p = $"{cont2}";
            int resultado2 = Int32.Parse(p.Last().ToString());

            int aux2 = diferencia - resultado2;

            for (int i = 0; i < bancosucursal.Length; i++)
            {
                if (i < 3)
                {
                    banco += bancosucursal[i];
                }
                else if (i > 2)
                {
                    sucursal += bancosucursal[i];
                }
            }
            nroverif1 = $"{nrover1}";
            for (int j = 0; j < nrocuenta.Length; j++)
            {
                if (j < nrocuenta.Length)
                {
                    numerocuenta += nrocuenta[j];
                }

            }
            if (aux == nrover1 && aux2 == nrover2)
            {
                MessageBox.Show("Cbu Verificado", "Verificacion Cbu", MessageBoxButtons.OK, MessageBoxIcon.Information);
                nroverif2 = $"{nrover2}";
                setlblvalues(banco, sucursal, nroverif1, numerocuenta, nroverif2);
            }
            else if ((aux == diferencia && nrover1 == 0) || ((aux2 == diferencia && nrover2 == 0)))
            {
                MessageBox.Show("Cbu Verificado", "Verificacion Cbu", MessageBoxButtons.OK, MessageBoxIcon.Information);
                nroverif2 = $"{nrover2}";
                setlblvalues(banco, sucursal, nroverif1, numerocuenta, nroverif2);
            }
            else if ((aux == diferencia && nrover1 == 0) && ((aux2 == diferencia && nrover2 == 0)))
            {
                MessageBox.Show("Cbu Verificado", "Verificacion Cbu", MessageBoxButtons.OK, MessageBoxIcon.Information);
                nroverif2 = $"{nrover2}";
                setlblvalues(banco, sucursal, nroverif1, numerocuenta, nroverif2);
            }
            else
            {
                MessageBox.Show("Intente nuevamente", "Cbu no verificado!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                
            }

        }

        //Chequeo si efectivamente la cadena enviada contiene solamente numeros

        private void btnporlotes_Click(object sender, EventArgs e)
        {
            if (tb1.Text.Length > 22 || tb1.Text.Length < 22)
            {
                MessageBox.Show("Advertencia!!", "El numero no tiene 22 digitos por lo tanto no es un cbu", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                tb1.Text = string.Empty;
                if (tb1.Enabled == false)
                {
                    tb1.Enabled = true;
                }
            }
            else
            {
                algoritmoporlotes();

            }
        }

        //logica de lectura y verificacion por lotes del cbu

        void algoritmoporlotes()
        {
            resetlblvalues();
            char[] s = tb1.Text.ToCharArray(0, tb1.TextLength);
            int[] bancosucursal = new int[7];
            string banco = null;
            string sucursal = null;
            string nroverif1 = null, numerocuenta = null, nroverif2 = null;
            int nrover1 = 0;
            int[] nrocuenta = new int[13];
            int nrover2 = 0;
            bool flag= true;

            for (int i = 0; i < 7; i++)
            {
                bancosucursal[i] = Int32.Parse(s.GetValue(i).ToString());

            }
            nrover1 = Int32.Parse(s.GetValue(7).ToString());
            int w = 0;
            for (int i = 8; i < 21; i++)
            {

                nrocuenta[w] = Int32.Parse(s.GetValue(i).ToString());

                w++;
            }

            nrover2 = Int32.Parse(s.GetValue(21).ToString());

            int[] arr = { 7, 1, 3, 9, 7, 1, 3 };
            int[] suma = new int[7];
            for (int i = 0; i < bancosucursal.Length; i++)
            {
                suma[i] = bancosucursal[i] * arr[i];
            }
            int cont = 0;
            const int diferencia = 10;
            for (int i = 0; i < suma.Length; i++)
            {
                cont += suma[i];
            }

            string k = $"{cont}";
            int resultado = Int32.Parse(k.Last().ToString());

            int aux = diferencia - resultado;
            int contsuccess = 0;
            while (flag)
            {
                if (aux == nrover1)
                {
                    MessageBox.Show("Primer digito de seguridad chequeado correctamente.", "Verificacion Cbu", MessageBoxButtons.OK, MessageBoxIcon.Information);

                    contsuccess++;
                }
                else if (aux == diferencia && nrover1 == 0)
                {
                    MessageBox.Show("Primer digito de seguridad chequeado correctamente.", "Verificacion Cbu", MessageBoxButtons.OK, MessageBoxIcon.Information);

                    contsuccess++;
                }
                else
                {
                    MessageBox.Show("Cbu no verificado. Intente nuevamente", "Primer digito de seguridad incorrecto",MessageBoxButtons.OK,MessageBoxIcon.Error);
                    break;
                }
            
            int[] arr2 = { 3, 9, 7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 3 };
            int[] suma2 = new int[13];
            for (int i = 0; i < suma2.Length; i++)
            {
                suma2[i] = nrocuenta[i] * arr2[i];
            }
            int cont2 = 0;
            for (int i = 0; i < suma2.Length; i++)
            {
                cont2 += suma2[i];
            }
            string p = $"{cont2}";
            int resultado2 = Int32.Parse(p.Last().ToString());

            int aux2 = diferencia - resultado2;

                if (aux2 == nrover2)
                {
                    MessageBox.Show("Segundo digito de seguridad chequeado correctamente.","Verificacion Cbu", MessageBoxButtons.OK, MessageBoxIcon.Information);

                    contsuccess++;
                }
                else if (aux2 == diferencia && nrover2 == 0)
                {
                    MessageBox.Show("Segundo digito de seguridad chequeado correctamente.", "Verificacion Cbu", MessageBoxButtons.OK, MessageBoxIcon.Information);

                    contsuccess++;
                }
                else
                {
                    MessageBox.Show("Cbu no verificado. Intente nuevamente" , "Segundo digito de seguridad incorrecto", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    break;
                }
                if (contsuccess == 2)
                {
                    MessageBox.Show("Cbu Verificado");
                    break;
                }
             
            }
            for (int i = 0; i < bancosucursal.Length; i++)
            {
                if (i < 3)
                {
                    banco += bancosucursal[i];
                }
                else if (i > 2)
                {
                    sucursal += bancosucursal[i];
                }
            }
            nroverif1 = $"{nrover1}";
            for (int j = 0; j < nrocuenta.Length; j++)
            {
                if (j < nrocuenta.Length)
                {
                    numerocuenta += nrocuenta[j];
                }

            }
            nroverif2 = $"{nrover2}";
            lblbanco.Text = "Banco: " + banco;
            lblsucursal.Text = "Sucursal: " + sucursal;
            lblnrover1.Text = "Nro verificacion 1: " + nroverif1;
            lblnrocuenta.Text = "Numero cuenta: " + numerocuenta;
            lblnrover2.Text = "Nro verificacion 2: " + nroverif2;
            lblbanco.Visible = true;
            lblsucursal.Visible = true;
            lblnrover1.Visible = true;
            lblnrocuenta.Visible = true;
            lblnrover2.Visible = true;
        }

        //realiza la logica de verificacion por lotes de los cbu del archivo 

        void algoritmoporlotesarchivo(List<string> cbu)
        {
            int[] bancosucursal = new int[7];
            string banco = null;
            string sucursal = null;
            string nroverif1 = null, numerocuenta = null, nroverif2 = null;
            int nrover1 = 0;
            int[] nrocuenta = new int[13];
            int nrover2 = 0;
            string auxiliar=null;
            bool flag = true;
            int z = 0;
            MessageBox.Show($"Cantidad de cbus: {cbu.Count}");
            int contfail = 0;
            while (flag)
            {
                auxiliar = cbu.First();
                char[] s = auxiliar.ToCharArray();
                resetlblvalues();
                for (int i = 0; i < 7; i++)
                {

                    bancosucursal[i] = Int32.Parse(s.GetValue(i).ToString());

                }
                nrover1 = Int32.Parse(s.GetValue(7).ToString());

                int w = 0;
                for (int i = 8; i < 21; i++)
                {

                    nrocuenta[w] = Int32.Parse(s.GetValue(i).ToString());

                    w++;
                }

                nrover2 = Int32.Parse(s.GetValue(21).ToString());

                int[] arr = { 7, 1, 3, 9, 7, 1, 3 };
                int[] suma = new int[7];
                for (int i = 0; i < bancosucursal.Length; i++)
                {
                    suma[i] = bancosucursal[i] * arr[i];
                }
                int cont = 0;
                const int diferencia = 10;
                for (int i = 0; i < suma.Length; i++)
                {
                    cont += suma[i];
                }

                string k = $"{cont}";
                int resultado = Int32.Parse(k.Last().ToString());

                int aux = diferencia - resultado;

                if (aux == nrover1)
                {
                    MessageBox.Show($"Primer digito de seguridad chequeado correctamente ", $"Cbu nro:{(z+contfail + 1)}", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                else if (aux == diferencia && nrover1 == 0)
                {
                    MessageBox.Show("Primer digito de seguridad chequeado correctamente.", $"Cbu nro:{(z + contfail + 1)}", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                else
                {
                    MessageBox.Show($"Primer digito de seguridad incorrecto ", $"Cbu nro:{(z + contfail + 1)}", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    
                }
                int[] arr2 = { 3, 9, 7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 3 };
                int[] suma2 = new int[13];
                for (int i = 0; i < suma2.Length; i++)
                {
                    suma2[i] = nrocuenta[i] * arr2[i];
                }
                int cont2 = 0;
                for (int i = 0; i < suma2.Length; i++)
                {
                    cont2 += suma2[i];
                }
                string p = $"{cont2}";
                int resultado2 = Int32.Parse(p.Last().ToString());

                int aux2 = diferencia - resultado2;

                if (aux2 == nrover2)
                {
                    MessageBox.Show($"Segundo digito de seguridad chequeado correctamente ", $"Cbu nro:{(z + contfail + 1)}", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                else if (aux2 == diferencia && nrover2 == 0)
                {
                    MessageBox.Show("Segundo digito de seguridad chequeado correctamente.", $"Cbu nro:{(z + contfail + 1)}", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                else
                {
                    MessageBox.Show($"Segundo digito de seguridad incorrecto ", $"Cbu nro:{(z + contfail + 1)}", MessageBoxButtons.OK, MessageBoxIcon.Error);
                   
                }
                for (int i = 0; i < bancosucursal.Length; i++)
                {
                    if (i < 3)
                    {
                        banco += bancosucursal[i];
                    }
                    else if (i > 2)
                    {
                        sucursal += bancosucursal[i];
                    }
                }
                nroverif1 = $"{nrover1}";
                for (int j = 0; j < nrocuenta.Length; j++)
                {
                    if (j < nrocuenta.Length)
                    {
                        numerocuenta += nrocuenta[j];
                    }

                }
                nroverif2 = $"{nrover2}";
                if (aux == nrover1 && aux2 == nrover2)
                {
                    
                    setlblvalues(banco, sucursal, nroverif1, numerocuenta, nroverif2);
                    MessageBox.Show($"Nro cbu: {(z +contfail+ 1)}", "Cbu Verificado");
                    Thread.Sleep(1000);
                }
                else
                {
                    contfail++;
                    MessageBox.Show($"Nro cbu: {(z + contfail )}", "Cbu no Verificado");
                    z--;

                }


                if (cbu.Count < z)
                {
                    MessageBox.Show("Todos los cbus fueron leidos.");
                    cbu.Clear();
                    flag = false;
                    break;
                }
                else if(cbu.Count >= z) { 
                
                    cbu.Remove(cbu.First());
                    z++;
                    banco = null;
                    sucursal = null;
                    numerocuenta = null;
                }

            }
            auxiliar = null;
            tb1.Enabled = true;
        }

        //realiza la logica de verificacion completa del cbu de los registros del archivo

        void algoritmocompletoarchivo(List<string> cbu)
        {

            int[] bancosucursal = new int[7];
            string banco = null;
            string sucursal = null;
            string nroverif1 = null, numerocuenta = null, nroverif2 = null;
            int nrover1 = 0;
            int[] nrocuenta = new int[13];
            int nrover2 = 0;
            string auxiliar=null;
            bool flag = true;
            int z = 0;
            int contfail = 0;
            MessageBox.Show($"Cantidad de cbus: {cbu.Count}");
            while (flag)
            {
                auxiliar = cbu.First();
                char[] s = auxiliar.ToCharArray();
                resetlblvalues();
                for (int i = 0; i < 7; i++)
                {

                    bancosucursal[i] = Int32.Parse(s.GetValue(i).ToString());

                }
                nrover1 = Int32.Parse(s.GetValue(7).ToString());

                int w = 0;
                for (int i = 8; i < 21; i++)
                {

                    nrocuenta[w] = Int32.Parse(s.GetValue(i).ToString());

                    w++;
                }

                nrover2 = Int32.Parse(s.GetValue(21).ToString());

                int[] arr = { 7, 1, 3, 9, 7, 1, 3 };
                int[] suma = new int[7];
                for (int i = 0; i < bancosucursal.Length; i++)
                {
                    suma[i] = bancosucursal[i] * arr[i];
                }
                int cont = 0;
                const int diferencia = 10;
                for (int i = 0; i < suma.Length; i++)
                {
                    cont += suma[i];
                }

                string k = $"{cont}";
                int resultado = Int32.Parse(k.Last().ToString());

                int aux = diferencia - resultado;
                int[] arr2 = { 3, 9, 7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 3 };
                int[] suma2 = new int[13];
                for (int i = 0; i < suma2.Length; i++)
                {
                    suma2[i] = nrocuenta[i] * arr2[i];
                }
                int cont2 = 0;
                for (int i = 0; i < suma2.Length; i++)
                {
                    cont2 += suma2[i];
                }
                string p = $"{cont2}";
                int resultado2 = Int32.Parse(p.Last().ToString());

                int aux2 = diferencia - resultado2;

                for (int i = 0; i < bancosucursal.Length; i++)
                {
                    if (i < 3)
                    {
                        banco += bancosucursal[i];
                    }
                    else if (i > 2)
                    {
                        sucursal += bancosucursal[i];
                    }
                }
                nroverif1 = $"{nrover1}";
                for (int j = 0; j < nrocuenta.Length; j++)
                {
                    if (j < nrocuenta.Length)
                    {
                        numerocuenta += nrocuenta[j];
                    }

                }
                nroverif2 = $"{nrover2}";
                if (aux == nrover1 && aux2 == nrover2)
                {

                    setlblvalues(banco, sucursal, nroverif1, numerocuenta, nroverif2);
                    MessageBox.Show($"Nro cbu: {z +contfail+ 1}", "Cbu Verificado");
                    Thread.Sleep(1000);
                }
                else if ((aux == diferencia && nrover1 == 0) || ((aux2 == diferencia && nrover2 == 0)))
                {
                    MessageBox.Show($"Nro cbu: {z + contfail + 1}", "Cbu Verificado", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                else if ((aux == diferencia && nrover1 == 0) && ((aux2 == diferencia && nrover2 == 0)))
                {
                    MessageBox.Show($"Nro cbu: {z + contfail + 1}", "Cbu Verificado", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                else
                {
                    contfail++;
                    MessageBox.Show($"Nro cbu: {z + contfail }", "Cbu no Verificado", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    z--;
                }

          
                if (cbu.Count < z)
                {
                    MessageBox.Show("Todos los cbus fueron leidos.");
                    cbu.Clear();
                    flag = false;
                    break;
                }
                else if (cbu.Count >= z)
                {
            
                    cbu.Remove(cbu.First());
                    z++;
                    banco = null;
                    sucursal = null;
                    numerocuenta = null;
                }

            }

            auxiliar = null;
            tb1.Enabled = true;
        }

        public void resetlblvalues()
        {
            lblbanco.Text = "";
            lblsucursal.Text = "";
            lblnrover1.Text = "";
            lblnrocuenta.Text = "";
            lblnrover2.Text = "";
            lblbanco.Visible = false;
            lblsucursal.Visible = false;
            lblnrover1.Visible = false;
            lblnrocuenta.Visible = false;
            lblnrover2.Visible = false;
        }
        public void setlblvalues(string banco, string sucursal, string nroverif1, string numerocuenta, string nroverif2)
        {
            lblbanco.Text = "Banco: " + banco;
            lblsucursal.Text = "Sucursal: " + sucursal;
            lblnrover1.Text = "Nro verificacion 1: " + nroverif1;
            lblnrocuenta.Text = "Numero cuenta: " + numerocuenta;
            lblnrover2.Text = "Nro verificacion 2: " + nroverif2;
            lblbanco.Visible = true;
            lblsucursal.Visible = true;
            lblnrover1.Visible = true;
            lblnrocuenta.Visible = true;
            lblnrover2.Visible = true;
        }
    }
}
