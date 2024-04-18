namespace Tpi_G5_Domus
{
    partial class AgenteInmobiliario
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(AgenteInmobiliario));
            this.panelmenuaginmob = new System.Windows.Forms.Panel();
            this.panelsubmenuaginmob = new System.Windows.Forms.Panel();
            this.btnpropiedad = new System.Windows.Forms.Button();
            this.btncatalogo = new System.Windows.Forms.Button();
            this.panel1 = new System.Windows.Forms.Panel();
            this.panelmenuaginmob.SuspendLayout();
            this.panelsubmenuaginmob.SuspendLayout();
            this.SuspendLayout();
            // 
            // panelmenuaginmob
            // 
            this.panelmenuaginmob.BackColor = System.Drawing.Color.White;
            this.panelmenuaginmob.Controls.Add(this.btncatalogo);
            this.panelmenuaginmob.Controls.Add(this.panelsubmenuaginmob);
            this.panelmenuaginmob.Dock = System.Windows.Forms.DockStyle.Left;
            this.panelmenuaginmob.Location = new System.Drawing.Point(0, 0);
            this.panelmenuaginmob.Name = "panelmenuaginmob";
            this.panelmenuaginmob.Size = new System.Drawing.Size(195, 470);
            this.panelmenuaginmob.TabIndex = 0;
            // 
            // panelsubmenuaginmob
            // 
            this.panelsubmenuaginmob.Controls.Add(this.btnpropiedad);
            this.panelsubmenuaginmob.Location = new System.Drawing.Point(0, 3);
            this.panelsubmenuaginmob.Name = "panelsubmenuaginmob";
            this.panelsubmenuaginmob.Size = new System.Drawing.Size(195, 83);
            this.panelsubmenuaginmob.TabIndex = 0;
            // 
            // btnpropiedad
            // 
            this.btnpropiedad.Dock = System.Windows.Forms.DockStyle.Top;
            this.btnpropiedad.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(206)))), ((int)(((byte)(209)))), ((int)(((byte)(221)))));
            this.btnpropiedad.FlatAppearance.BorderSize = 2;
            this.btnpropiedad.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnpropiedad.Font = new System.Drawing.Font("Segoe UI", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnpropiedad.Location = new System.Drawing.Point(0, 0);
            this.btnpropiedad.Name = "btnpropiedad";
            this.btnpropiedad.Size = new System.Drawing.Size(195, 53);
            this.btnpropiedad.TabIndex = 0;
            this.btnpropiedad.Text = "Propiedad";
            this.btnpropiedad.UseVisualStyleBackColor = true;
            // 
            // btncatalogo
            // 
            this.btncatalogo.FlatAppearance.BorderSize = 0;
            this.btncatalogo.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btncatalogo.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btncatalogo.Image = ((System.Drawing.Image)(resources.GetObject("btncatalogo.Image")));
            this.btncatalogo.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btncatalogo.Location = new System.Drawing.Point(3, 92);
            this.btncatalogo.Name = "btncatalogo";
            this.btncatalogo.Size = new System.Drawing.Size(189, 49);
            this.btncatalogo.TabIndex = 1;
            this.btncatalogo.Text = "Catalogo";
            this.btncatalogo.UseVisualStyleBackColor = true;
            // 
            // panel1
            // 
            this.panel1.Location = new System.Drawing.Point(205, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(658, 471);
            this.panel1.TabIndex = 1;
            // 
            // AgenteInmobiliario
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(251)))), ((int)(((byte)(250)))), ((int)(((byte)(249)))));
            this.ClientSize = new System.Drawing.Size(856, 470);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.panelmenuaginmob);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "AgenteInmobiliario";
            this.Text = "Oficina Virtual > Agente Inmobiliario";
            this.panelmenuaginmob.ResumeLayout(false);
            this.panelsubmenuaginmob.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private Panel panelmenuaginmob;
        private Button btncatalogo;
        private Panel panelsubmenuaginmob;
        private Button btnpropiedad;
        private Panel panel1;
    }
}